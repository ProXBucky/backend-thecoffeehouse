"use strict";

var _express = _interopRequireDefault(require("express"));
var _connectDB = _interopRequireDefault(require("./config/connectDB.mjs"));
var _viewEngine = _interopRequireDefault(require("./config/viewEngine.mjs"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _route = _interopRequireDefault(require("./routes/route.cjs"));
var _livereload = _interopRequireDefault(require("livereload"));
var _connectLivereload = _interopRequireDefault(require("connect-livereload"));
var _cors = _interopRequireDefault(require("cors"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _cloudinary = require("cloudinary");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();

//auto load server when optimize
const liveReloadServer = _livereload.default.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
let app = (0, _express.default)();
const env = process.env.NODE_ENV || "development";
if (env === "development") {
  app.use((0, _connectLivereload.default)());
}
app.use(_bodyParser.default.json({
  limit: '50mb'
}));
app.use(_bodyParser.default.urlencoded({
  extended: true,
  limit: '50mb',
  parameterLimit: 100000
}));
app.use((0, _cookieParser.default)());
app.use((0, _cors.default)());

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