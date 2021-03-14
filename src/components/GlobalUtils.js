export default `
  @media only screen and (max-width: 900px) {
    .mobile-none {
      display: none !important;
    }
  }
  @media only screen and (min-width: 900px) {
    .mobile {
      display: none !important;
    }
  }
  .pos-full {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .pos-center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .pos-center-vert {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .pos-center-horiz {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`