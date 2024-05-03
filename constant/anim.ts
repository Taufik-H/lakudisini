export const menuSlide = {
  initial: {
    x: "100%",
  },
  enter: {
    x: "0%",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: {
    x: "80px",
  },

  enter: (i: number) => ({
    x: "0px",
    transition: { duration: 0.09, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i: number) => ({
    x: "80px",
    transition: { duration: 0.09, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};
