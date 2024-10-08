import AboutImg from '../assets/about.png'

const About = () => {
  return (
    <div className="my-20 px-10">
        <h1 className="text-center text-4xl font-lora underline underline-offset-4">ABOUT</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 gap-10">
            <img src={AboutImg} alt="about image" className='w-full' />
            <div className='lex flex-col gap-5'>
                <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac vehicula nisl. Etiam interdum sodales erat eget elementum. Fusce sed aliquam purus. Aliquam erat volutpat. Ut sed mauris efficitur, fringilla eros eu, malesuada est. Donec laoreet massa non efficitur placerat. Nulla euismod venenatis maximus. Nullam id massa eget mauris molestie ornare. Donec vel ultrices purus. Phasellus eu justo sed enim gravida finibus. Quisque molestie posuere odio. Sed nulla neque, vulputate a leo et, maximus malesuada orci. Aliquam nisl ex, sollicitudin ut mollis at, molestie vitae ex. Mauris sit amet mattis dolor. <br /><br />
                    Donec convallis nunc at turpis ullamcorper semper. Nunc accumsan vestibulum vehicula. Aliquam ex nulla, eleifend eu quam at, hendrerit ornare massa. In egestas nunc vitae turpis fringilla, vitae tincidunt arcu vulputate. Proin odio magna, volutpat in bibendum in, varius a felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed lacus turpis, elementum consequat lacus id, pellentesque tincidunt arcu. Duis pulvinar nibh et mi eleifend, id suscipit purus consectetur. Nunc a sapien nunc. Integer id sapien viverra nunc fringilla aliquam quis vel massa. Suspendisse sed ipsum quis nulla interdum viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Integer venenatis diam sit amet auctor tincidunt. Vestibulum eu nunc tristique, semper quam eget, sodales dui.
                </p>
                <div className='bg-[#464447] p-3 px-5 font-futura text-white w-fit mt-10 rounded-md'>View Catalogues</div>
            </div>
        </div>
    </div>
  )
}

export default About