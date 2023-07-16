"use strict";

var _express = _interopRequireDefault(require("express"));
var _route = _interopRequireDefault(require("./src/routes/route.mjs"));
var _connectDB = _interopRequireDefault(require("./src/config/connectDB.mjs"));
var _viewEngine = _interopRequireDefault(require("./src/config/viewEngine.mjs"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
let app = (0, _express.default)();
(0, _route.default)(app);
(0, _viewEngine.default)(app);
(0, _connectDB.default)();
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));

let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend is running in port http://localhost:${port}`);
});