import Image from "next/image";

const Navbar = ({ backButton, title }) => {
  let greet;
  let hours = new Date().getHours();
  if (hours < 12) {
    greet = "Selamat Pagi";
  } else if (hours >= 12 && hours <= 17) {
    greet = "Selamat Siang";
  } else if (hours >= 17 && hours <= 24) {
    greet = "Selamat Malam";
  }

  return (
    <nav className="w-full bg-cyan-600 h-20 flex items-center">
      {backButton ? (
        <div className=" pl-28 flex items-center">
          <p className="mx-3 font-semibold text-xl  text-white">{title}</p>
        </div>
      ) : (
        <div className=" pl-28 flex items-center">
          <Image
            src="/students.jpg"
            alt="students"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="mx-3 font-bold text-xl  text-white">
            <span className="font-normal">{greet},</span> Joshua!
          </p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
