import gsap, { Expo } from "gsap";

export const useJumpAnimation = () => {
  const jumpAnimation = (animatedObject) => {
    if (animatedObject) {
      const t1 = gsap.timeline({
        delay: Math.random(),
      });

      //defaults
      t1.set(animatedObject.position, { y: 0.5 });
      t1.set(animatedObject.scale, { y: 1, x: 1, z: 1 });

      //squash
      t1.to(animatedObject.scale, {
        y: 0.5,
        x: 2,
        z: 2,
        duration: 0.25,
        ease: Expo.easeOut,
      });
      t1.to(
        animatedObject.position,
        { y: 0.5, duration: 0.25, ease: Expo.easeIn },
        "<"
      );

      //straight
      t1.to(animatedObject.scale, {
        y: 1,
        x: 1,
        z: 1,
        duration: 0.25,
        ease: Expo.easeIn,
      });
      t1.to(
        animatedObject.position,
        { y: 1, duration: 0.25, ease: Expo.easeOut },
        "<"
      );

      //up
      t1.to(animatedObject.position, {
        y: 20,
        duration: 1,
        ease: Expo.easeOut,
      });

      //stretch and rotate
      t1.to(animatedObject.scale, {
        y: 5,
        duration: 0.5,
        ease: Expo.easeIn,
      });
      t1.to(animatedObject.rotation, { y: 2, duration: 1 }, "<");
      t1.to(
        animatedObject.position,
        { y: 0.5, duration: 1, ease: Expo.easeIn },
        "<"
      );
      t1.to(
        animatedObject.scale,
        {
          y: 1,
          duration: 0.5,
          ease: Expo.easeIn,
        },
        "<"
      );
      t1.repeat(-1);
    }
  };

  return jumpAnimation;
};
