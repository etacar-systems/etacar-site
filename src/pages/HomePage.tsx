import Button from "../shared/ui/Button/Button";
import '../shared/styles/_all.scss'

export default function HomePage() {
    return (
            <main className='home'>
                <section className='home__main-block'>
                    <div className='home__main-text'>
                        <div>Your Digital</div>
                        <div className='home__color-text'> Product</div>
                        <div className='home__color-text'>Development</div>
                        <div> Partner</div>
                    </div>

                    <div className='home__right-block'>
                        <div className='home__motivation-text'>
                                Expand your business capabilities
                                with comprehensive world-class software development, including
                                thoughtful strategy, UX/UI design and on-demand development
                        </div>
                        <div className='home__get-started'>
                            <div className='home__free-project-text'> free project estimation </div>
                            <Button text={'Get Started'} onClick={() => {
                            }}/>
                        </div>
                    </div>
            </section>
            </main>

    )

}
