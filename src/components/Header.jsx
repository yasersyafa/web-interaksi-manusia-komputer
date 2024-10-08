import HeaderImage from '../assets/header.png'

const Header = () => {
    return (
      <div className="relative mx-[24px] lg:mx-[49px] my-[50px] h-[400px] lg:h-[800px] bg-cover bg-center rounded-xl" style={{ backgroundImage: `url(${HeaderImage})` }}>
        {/* Overlay hitam dengan opacity 30% */}
        <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
  
        {/* Teks di atas gambar */}
        <div className="absolute inset-0 flex justify-center items-center">
          <h1 className="text-white text-4xl text-center lg:text-[75px] font-lora font-medium uppercase">Design Interior</h1>
        </div>
      </div>
    );
  };
  
  export default Header
  