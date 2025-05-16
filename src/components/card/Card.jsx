import './card.css'
import img1 from '/src/assets/images/image-equilibrium.jpg'
import img2 from '/src/assets/images/icon-view.svg'
import img3 from '/src/assets/images/icon-ethereum.svg'
import img4 from '/src/assets/images/icon-clock.svg'
import img5 from '/src/assets/images/image-avatar.png'
export default function Card() {
    return(
        <section>
            <div className='card'>
                <div className='active'>
                    <img className='Img' src={img1} alt="logo equilibrium" />
                    <div className='overlay'>
                    <img className='icon' src={img2} alt="" />
                    </div>
                    
                </div>
                
                <div className='div1'>
                    <h2 className='div1H2'>Equilibrium #3429</h2>
                </div>
                <div className='div2'>
                    <p className='div2P'>Our Equilibrium collection promotes balance and calm.</p>
                </div>
                <div className='div3'>
                    <div className='div3Div1'>
                        <img className='div3Div1Img' src={img3} alt="logo ethereum" />
                        <p className='div3Div1P'>0.041 ETH</p>
                    </div>
                    <div className='div3Div2'>
                        <img className='div3Div2Img' src={img4} alt="" />
                        <p className='div3Div2P'>3 days left</p>
                    </div>
                </div>
                <div className='div4'>
                    <img className='div4Img' src={img5} alt="" />
                    <p className='div4P'>Creation of <span className='div4Span'>Jules Wyvern</span></p>
                </div>
            </div>
        </section>
    )
}