import { digitSeparate } from "../utils/digitSeparate";
import { connect } from "react-redux";
import Link from "next/link";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

const PaymentDetail = ({ payment }) => {
  const formatDateToIndonesian = new Intl.DateTimeFormat("id", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const formattedDate = formatDateToIndonesian.format(
    new Date(Date.now() + 3600 * 1000 * 24)
  );
  const router = useRouter();

  return (
    <Layout
      pageTitle="Detail Pembayaran"
      backButton={true}
      title="Detail Pembayaran"
    >
      <main className="mt-8">
        <div className="pt-4 bg-white px-28">
          <div className="py-4 mb-2 px-6 border-b border-2">
            <p className="text-xs font-light text-black ">Nomor Pesanan:</p>
            <p className="text-base font-medium">{new Date().getTime()}</p>
          </div>
          <div className="py-4 mb-4 px-6 border-b border-2">
            <p className="text-xs font-light text-black ">Bayar Sebelum:</p>
            <p className="text-base font-medium">{formattedDate} WIB</p>
          </div>
          <h3 className="text-base font-normal text-black pb-4">
            Transfer Ke :
          </h3>
          <div className="py-4 mb-2 px-6 border-b border-2">
            <p className="text-xs font-light text-black ">Atas Nama:</p>
            <p className="text-base font-medium">SMP Taruna</p>
          </div>
          <div className="py-4 mb-4 px-6 border-b border-2">
            <p className="text-xs font-light text-black ">Sejumlah:</p>
            <p className="text-base font-medium">
              Rp. {digitSeparate(payment)}
            </p>
          </div>
          <div className="flex justify-end mt-6">
            <button
              className="bg-gray-300 text-black px-6 py-2 mr-3 rounded-lg"
              onClick={() => router.push("/")}
            >
              Batal
            </button>
            <Link href="/payment-confirm">
              <a className="bg-blue-500 text-white px-6 py-2 rounded-lg">
                Konfirmasi
              </a>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    payment: state.totalPayment,
  };
};

export default connect(mapStateToProps)(PaymentDetail);
