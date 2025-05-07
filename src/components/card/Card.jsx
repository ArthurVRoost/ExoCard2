import './card.css'
export default function Card() {
    return(
        <section>
            <div className='card'>
                <img className='Img' src="../../src/assets/images/image-equilibrium.jpg" alt="logo equilibrium" />
                <div className='div1'>
                    <h2 className='div1H2'>Equilibrium #3429</h2>
                </div>
                <div className='div2'>
                    <p className='div2P'>Our Equilibrium collection promotes balance and calm.</p>
                </div>
                <div className='div3'>
                    <div className='div3Div1'>
                        <img className='div3Div1Img' src="../../src/assets/images/icon-ethereum.svg" alt="logo ethereum" />
                        <p className='div3Div1P'>0.041 ETH</p>
                    </div>
                    <div className='div3Div2'>
                        <img className='div3Div2Img' src="../../src/assets/images/icon-clock.svg" alt="" />
                        <p className='div3Div2P'>3 days left</p>
                    </div>
                </div>
                <div className='div4'>
                    <img className='div4Img' src="../../src/assets/images/image-avatar.png" alt="" />
                    <p className='div4P'>Creation of <span className='div4Span'>Jules Wyvern</span></p>
                </div>
            </div>
        </section>
    )
}