import Button from '../../shared/ui/Button/Button';
import '../../shared/styles/_all.scss';

export default function GetStarted() {
  return (
    <>
      <section className='get-started__main-block'>
        <div className='get-started__main-text'>
          <div>Your Digital</div>
          <div className='get-started__color-text'> Product</div>
          <div className='get-started__color-text'>Development</div>
          <div> Partner</div>
        </div>

        <div className='get-started__right-block'>
          <div className='get-started__motivation-text'>
                        Expand your business capabilities
                        with comprehensive world-class software development, including
                        thoughtful strategy, UX/UI design and on-demand development
          </div>
          <div className='get-started__get-started'>
            <div className='get-started__free-project-text'> free project estimation</div>
            <Button text={'Get Started'} onClick={() => {
            }}/>
          </div>
        </div>
      </section>
    </>
  );
}
