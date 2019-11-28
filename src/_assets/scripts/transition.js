import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class Fade extends Highway.Transition {
  in ({from, to, done}) {
    const tl = TimelineLite();
    tl.fromTo(
      to,
      1,
      { bottom: "-100%", opacity: "0"},
      {
        bottom: "0%",
        opacity: "1",
        onComplete: function() {
          from.remove();
          done();
        }
      }
    )
    .fromTo(to.children[0], 2, {opacity: 0}, {opacity: 1})
  }

  out ({from, done}) {
    done();
  }
}

export default Fade;