import { useEffect, useState } from "react";

interface GoldPrice {
  sell: number;
  buy: number;
  type: string;
  info: string;
  weight: number | null;
  unit: string;
}

interface BuyModalProps {
  isOpen: boolean;
  onClose: () => void;
  goldItem: GoldPrice | null;
}

function BuyModal({ isOpen, onClose, goldItem }: BuyModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (goldItem) {
      setTotalPrice(goldItem.sell * quantity);
    }
  }, [quantity, goldItem]);

  if (!isOpen || !goldItem) return null;

  const handleBuy = () => {
    alert(`Pembelian berhasil!\n${goldItem.type}\nJumlah: ${quantity} ${goldItem.unit}\nTotal: Rp ${totalPrice.toLocaleString('id-ID')}`);
    onClose();
    setQuantity(1);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Beli {goldItem.type}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="mb-4">
          <p className="text-gray-600 mb-2">{goldItem.info}</p>
          <p className="text-lg font-semibold">
            Harga: Rp {goldItem.sell.toLocaleString('id-ID')} per {goldItem.unit}
          </p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Jumlah ({goldItem.unit})
          </label>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="bg-gray-200 px-3 py-1 text-black rounded hover:bg-gray-300"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="border border-gray-300 text-black px-3 py-1 rounded w-20 text-center"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="bg-gray-200 px-3 py-1 text-black rounded hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        <div className="mb-6">
          <div className="bg-gray-100 p-3 rounded">
            <div className="flex text-black justify-between">
              <span>Subtotal:</span>
              <span className="font-semibold">
                Rp {totalPrice.toLocaleString('id-ID')}
              </span>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400"
          >
            Batal
          </button>
          <button
            onClick={handleBuy}
            className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Beli Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

export default function InfoEmas() {
  const [data, setData] = useState<GoldPrice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedGold, setSelectedGold] = useState<GoldPrice | null>(null);
  const [showBuyModal, setShowBuyModal] = useState(false);

  const handleBuyClick = (goldItem: GoldPrice) => {
    setSelectedGold(goldItem);
    setShowBuyModal(true);
  };

  const closeBuyModal = () => {
    setShowBuyModal(false);
    setSelectedGold(null);
  };

  useEffect(() => {
    fetch("https://logam-mulia-api.vercel.app/prices/anekalogam")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch gold prices');
        }
        return res.json();
      })
      .then((responseData) => {
        // Handle different response formats
        let goldData: GoldPrice[] = [];

        if (Array.isArray(responseData)) {
          goldData = responseData;
        } else if (responseData && typeof responseData === 'object') {
          // Try to find array in common property names
          const possibleKeys = ['data', 'prices', 'results', 'items'];
          for (const key of possibleKeys) {
            if (Array.isArray(responseData[key])) {
              goldData = responseData[key];
              break;
            }
          }
        }

        setData(goldData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Loading harga emas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
        Error: {error}
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Tidak ada data harga emas tersedia.</p>
      </div>
    );
  }

  return (
    <div>
        <div className="flex justify-between items-center py-7">
            <h1 className="text-2xl font-black text-black ">Gold Info</h1>
            <div className="flex gap-3">
            <button className="bg-gray-200 px-8 py-3 cursor-pointer hover:bg-gray-300 font-bold text-black">Buying</button>
            <button className="bg-blue-500 px-8 py-3 cursor-pointer hover:bg-blue-700 font-bold">Refresh</button>
            </div>
        </div>
        <div className="bg-white border border-gray-300">
            <table className="w-full">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border border-gray-300 text-black px-4 py-2 text-left">Jenis</th>
                    <th className="border border-gray-300 text-black px-4 py-2 text-left">Info</th>
                    <th className="border border-gray-300 text-black px-4 py-2 text-right">Harga Beli</th>
                    <th className="border border-gray-300 text-black px-4 py-2 text-right">Harga Jual</th>
                    <th className="border border-gray-300 text-black px-4 py-2 text-center">Unit</th>
                    <th className="border border-gray-300 text-black px-4 py-2 text-center">Action</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={item.type || index}>
                    <td className="border border-gray-300 text-gray-500 px-4 py-2 font-medium">{item.type}</td>
                    <td className="border border-gray-300 text-gray-500 px-4 py-2">{item.info}</td>
                    <td className="border border-gray-300 text-gray-500 px-4 py-2 text-right">
                        Rp {item.buy?.toLocaleString('id-ID') || 'N/A'}
                    </td>
                    <td className="border border-gray-300 text-gray-500 px-4 py-2 text-right">
                        Rp {item.sell?.toLocaleString('id-ID') || 'N/A'}
                    </td>
                    <td className="border border-gray-300 text-gray-500 px-4 py-2 text-center">{item.unit}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                        <button
                            onClick={() => handleBuyClick(item)}
                            className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                        >
                            Buy
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

        <BuyModal
            isOpen={showBuyModal}
            onClose={closeBuyModal}
            goldItem={selectedGold}
        />
    </div>
  );
}
