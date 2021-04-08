var _gsap = _interopRequireDefault(require("https://cdn.skypack.dev/gsap"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BOUNDS = 50;
document.addEventListener('pointermove', ({
    x,
    y
}) => {
    const newX = _gsap.default.utils.mapRange(0, window.innerWidth, -BOUNDS, BOUNDS, x);

    const newY = _gsap.default.utils.mapRange(0, window.innerHeight, BOUNDS, -BOUNDS, y);

    _gsap.default.set(document.documentElement, {
        '--rotate-x': newY,
        '--rotate-y': newX
    });
});
let CHECKED = false;
document.addEventListener('pointerdown', e => {
    CHECKED = !CHECKED;
    document.documentElement.style.setProperty('--dark', CHECKED ? 1 : 0);
});