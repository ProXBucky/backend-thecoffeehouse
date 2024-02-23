"use strict";

var _express = _interopRequireDefault(require("express"));
var _connectDB = _interopRequireDefault(require("./config/connectDB.mjs"));
var _viewEngine = _interopRequireDefault(require("./config/viewEngine.mjs"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _route = _interopRequireDefault(require("./routes/route.cjs"));
var _cors = _interopRequireDefault(require("cors"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _cloudinary = require("cloudinary");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _path = _interopRequireWildcard(require("path"));
var _url = require("url");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const _dirname = (0, _path.dirname)((0, _url.fileURLToPath)(import.meta.url));
let app = (0, _express.default)();
app.use((0, _cors.default)({
  origin: process.env.REACT_PORT,
  // Đặt nguồn (origin) cụ thể mà bạn muốn cho phép
  methods: 'GET,POST,PUT,DELETE',
  // Các phương thức được phép
  allowedHeaders: 'authorization, Content-Type',
  // Các tiêu đề được phép
  credentials: true // Cho phép gửi cookie và header xác thực
}));

app.use(_bodyParser.default.json({
  limit: '50mb'
}));
app.use(_bodyParser.default.urlencoded({
  extended: true,
  limit: '50mb'
}));
app.use((0, _cookieParser.default)());

// Cấu hình kết nối Cloudinary
_cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

// Kết nối Routes
(0, _route.default)(app);
(0, _viewEngine.default)(app);
//Kết nối database
(0, _connectDB.default)();
let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend is running in port http://localhost:${port}`);
});