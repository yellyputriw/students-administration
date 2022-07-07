import { connect } from "react-redux";
import { Payments } from "../utils/Payments";
import ACTION_TYPE from "../redux/action";
import { digitSeparate } from "../utils/digitSeparate";

import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Layout from "../components/Layout";

const Home = ({ payment, increment, decrement }) => {
  const handleChange = (e) => {
    if (e.target.checked) {
      increment(Number(e.target.value));
    } else {
      decrement(Number(e.target.value));
    }
  };

  const router = useRouter();

  return (
    <Layout back={false} pageTitle={"Administrasi Siswa"}>
      <main className="mt-8">
        <div className="mb-24 grid grid-cols-2 gap-5 container mx-auto">
          {Payments.map(({ id, title, bill, period }) => (
            <div className="flex justify-start mb-6" key={id}>
              <div className="flex items-center mr-5">
                <input
                  type="checkbox"
                  id={id}
                  name="tagihan"
                  value={bill}
                  onChange={handleChange}
                />
              </div>
              <label htmlFor={id} className="border">
                <p className="text-lg px-4 py-2 m-0 border-b">{title}</p>
                <div className="flex justify-between p-4 ">
                  <p className="text-xs mr-6">
                    Bulan/Semester : <br />
                    <span className="font-semibold text-lg">{period}</span>
                  </p>
                  <p className="text-xs">
                    Tagihan : <br />
                    <span className="font-semibold text-lg price-element">
                      Rp. {digitSeparate(bill)}
                    </span>
                  </p>
                </div>
              </label>
            </div>
          ))}
        </div>
      </main>
      <footer className="fixed bottom-0 pr-28 py-4 bg-white border-t-gray-300 border-t w-full flex justify-end items-center">
        <div className="mr-14">
          <p className="text-sm font-normal text-black mb-0">
            Total Pembayaran
          </p>
          <p className="text-base font-bold">
            Rp. <span className="total-price">{digitSeparate(payment)}</span>
          </p>
        </div>
        <Link href="/payment-detail">
          <a className="bg-blue-500 text-white px-6 py-2 rounded-lg">Bayar</a>
        </Link>
      </footer>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    payment: state.totalPayment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (e) =>
      dispatch({ type: ACTION_TYPE.INCREMENT_AMOUNT, value: e }),
    decrement: (e) =>
      dispatch({ type: ACTION_TYPE.DECREMENT_AMOUNT, value: e }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
