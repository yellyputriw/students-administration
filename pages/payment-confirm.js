import Head from "next/head";
import { useRouter } from "next/router";

const PaymentConfirm = () => {
  const handleClick = () => {
    const phoneNumber = "6289677018707";
    const message = encodeURI("Saya ingin konfirmasi pembayaran");
    const target = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    window.location.href = target;
  };

  const router = useRouter();
  return (
    <>
      <Head>
        <title>Administrasi Siswa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white w-full h-screen">
        <div className=" flex flex-col justify-center items-center m-auto pt-24">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
          <h2 className="text-2xl font-bold mt-5">Pembayaran Berhasil!</h2>
          <p className="text-base font-medium text-center pt-3 px-5">
            Kirimkan bukti transfer agar transaksi segera diproses
          </p>
          <button
            className="w-60 text-base font-medium text-white bg-blue-500 rounded border-white py-2 px-6 mt-5"
            onClick={handleClick}
          >
            Konfirmasi Bukti Transfer
          </button>
          <button
            className="w-60 bg-gray-300 text-black px-6 py-2 mt-2 rounded"
            onClick={() => router.push("/")}
          >
            Kembali ke Menu
          </button>
        </div>
      </main>
    </>
  );
};

export default PaymentConfirm;
