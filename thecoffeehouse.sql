
--
-- Dumping data for table "ImageStore"
--
INSERT INTO "Allcodes" ("id", "type", "keyMap", "valueEn", "valueVn", "createdAt", "updatedAt") VALUES
(29, 'ROLE', 'R1', 'Manager', 'Quản lý', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 'ROLE', 'R2', 'Admin', 'Quản trị viên', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, 'ROLE', 'R3', 'Client', 'Khách hàng', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, 'STATUS', 'SP1', 'Unpaid', 'Chưa thanh toán', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, 'STATUS', 'SP2', 'Paid', 'Đã thanh toán', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, 'STATUS', 'SP3', 'Delivered', 'Đã giao hàng', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, 'CITY', 'C1', 'Ha Noi', 'Hà Nội', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(36, 'CITY', 'C2', 'Ho Chi Minh', 'Hồ Chí Minh', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(37, 'CITY', 'C3', 'Da Nang', 'Đà Nẵng', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(38, 'CATEGORY', 'CA1', 'Coffe', 'Cà Phê', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(39, 'CATEGORY', 'CA2', 'Tea', 'Trà', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(40, 'CATEGORY', 'CA3', 'Cake and Snack', 'Bánh ngọt và Snack', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(41, 'CATEGORY', 'CA4', 'Frosty', 'Đá xay', '0000-00-00 00:00:00', '0000-00-00 00:00:00');


INSERT INTO "ImageStore" ("id", "storeId", "image", "cloudId", "createdAt", "updatedAt") VALUES
(6, '24', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693413583/uploads_store/itkdznbnlh39hrpgkvtm.webp', 'uploads_store/itkdznbnlh39hrpgkvtm', '2023-08-30 16:39:47', '2023-08-30 16:39:47'),
(7, '24', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693413586/uploads_store/vpydy7ck5vpb2quizr6i.webp', 'uploads_store/vpydy7ck5vpb2quizr6i', '2023-08-30 16:39:47', '2023-08-30 16:39:47'),
(8, '24', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693413587/uploads_store/vfmdwwgllxapofxvqysk.webp', 'uploads_store/vfmdwwgllxapofxvqysk', '2023-08-30 16:39:47', '2023-08-30 16:39:47'),
(9, '25', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693467300/uploads_store/jbgfr2nwbgyyayvrqyub.webp', 'uploads_store/jbgfr2nwbgyyayvrqyub', '2023-08-31 07:35:00', '2023-08-31 07:35:00'),
(10, '25', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693467300/uploads_store/qbh7nlkhad8lxh1o3fap.jpg', 'uploads_store/qbh7nlkhad8lxh1o3fap', '2023-08-31 07:35:00', '2023-08-31 07:35:00'),
(11, '25', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693467301/uploads_store/bxhyjgevofaxw4bvrbtt.webp', 'uploads_store/bxhyjgevofaxw4bvrbtt', '2023-08-31 07:35:00', '2023-08-31 07:35:00'),
(15, '27', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693467737/uploads_store/wb1xmqqjpr0ucei3jgkc.webp', 'uploads_store/wb1xmqqjpr0ucei3jgkc', '2023-08-31 07:42:17', '2023-08-31 07:42:17'),
(16, '27', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693467737/uploads_store/w5ks3gh8bp2kk1e76n8q.webp', 'uploads_store/w5ks3gh8bp2kk1e76n8q', '2023-08-31 07:42:17', '2023-08-31 07:42:17'),
(17, '27', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693467737/uploads_store/c1x4qnzbngzujzokuos5.webp', 'uploads_store/c1x4qnzbngzujzokuos5', '2023-08-31 07:42:17', '2023-08-31 07:42:17'),
(18, '27', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693467738/uploads_store/blwmy25vxzv77ek55wai.webp', 'uploads_store/blwmy25vxzv77ek55wai', '2023-08-31 07:42:17', '2023-08-31 07:42:17'),
(19, '28', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758478/uploads_store/cvrp5ldxpojhifiaajhu.webp', 'uploads_store/cvrp5ldxpojhifiaajhu', '2023-09-03 16:28:00', '2023-09-03 16:28:00'),
(20, '28', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758479/uploads_store/vztl7bpwknrpju1hjfrn.webp', 'uploads_store/vztl7bpwknrpju1hjfrn', '2023-09-03 16:28:00', '2023-09-03 16:28:00'),
(21, '28', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758478/uploads_store/zy1uyywheelfi05q1nvg.webp', 'uploads_store/zy1uyywheelfi05q1nvg', '2023-09-03 16:28:00', '2023-09-03 16:28:00'),
(22, '28', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758479/uploads_store/frl5uvvupxynza6criz4.webp', 'uploads_store/frl5uvvupxynza6criz4', '2023-09-03 16:28:00', '2023-09-03 16:28:00'),
(23, '29', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758630/uploads_store/nomewrz5fnpdbqjgo2sd.webp', 'uploads_store/nomewrz5fnpdbqjgo2sd', '2023-09-03 16:30:32', '2023-09-03 16:30:32'),
(24, '29', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758630/uploads_store/f7bpx3qbno0agiwitshx.webp', 'uploads_store/f7bpx3qbno0agiwitshx', '2023-09-03 16:30:32', '2023-09-03 16:30:32'),
(25, '29', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758630/uploads_store/vpc3pty1cplzp5lxfw1s.webp', 'uploads_store/vpc3pty1cplzp5lxfw1s', '2023-09-03 16:30:32', '2023-09-03 16:30:32'),
(26, '29', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758631/uploads_store/ar5cnwn2rr0unxmrscck.webp', 'uploads_store/ar5cnwn2rr0unxmrscck', '2023-09-03 16:30:32', '2023-09-03 16:30:32'),
(27, '29', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758631/uploads_store/h3zgwzyubsxctvmkveay.webp', 'uploads_store/h3zgwzyubsxctvmkveay', '2023-09-03 16:30:32', '2023-09-03 16:30:32'),
(28, '30', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758699/uploads_store/aby1dt3oyfzsm2kyakra.webp', 'uploads_store/aby1dt3oyfzsm2kyakra', '2023-09-03 16:31:40', '2023-09-03 16:31:40'),
(29, '30', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758699/uploads_store/y8gmefpuqokganjntetv.webp', 'uploads_store/y8gmefpuqokganjntetv', '2023-09-03 16:31:40', '2023-09-03 16:31:40'),
(30, '30', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758699/uploads_store/shpdqdoe0ay2wgfmkzlc.webp', 'uploads_store/shpdqdoe0ay2wgfmkzlc', '2023-09-03 16:31:40', '2023-09-03 16:31:40'),
(31, '30', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758699/uploads_store/gu3bbtojt37k1vnrvqlu.webp', 'uploads_store/gu3bbtojt37k1vnrvqlu', '2023-09-03 16:31:40', '2023-09-03 16:31:40'),
(32, '30', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758699/uploads_store/bgjhqz1afbvi9ib4ctho.webp', 'uploads_store/bgjhqz1afbvi9ib4ctho', '2023-09-03 16:31:40', '2023-09-03 16:31:40'),
(33, '30', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758699/uploads_store/gmwbbks63domnmibwn3u.webp', 'uploads_store/gmwbbks63domnmibwn3u', '2023-09-03 16:31:40', '2023-09-03 16:31:40'),
(34, '31', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758781/uploads_store/fp5ajwnsrzqj2qhdj5dx.webp', 'uploads_store/fp5ajwnsrzqj2qhdj5dx', '2023-09-03 16:33:03', '2023-09-03 16:33:03'),
(35, '31', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758782/uploads_store/bauqamrgvbm6cniqaa15.webp', 'uploads_store/bauqamrgvbm6cniqaa15', '2023-09-03 16:33:03', '2023-09-03 16:33:03'),
(36, '31', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758782/uploads_store/g2cqh9nkjlfphlekw3s9.webp', 'uploads_store/g2cqh9nkjlfphlekw3s9', '2023-09-03 16:33:03', '2023-09-03 16:33:03'),
(37, '31', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758782/uploads_store/nu49sepe2ewveo4tqfx4.webp', 'uploads_store/nu49sepe2ewveo4tqfx4', '2023-09-03 16:33:03', '2023-09-03 16:33:03'),
(38, '32', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758945/uploads_store/pcm0bqnnts4pz9a2flgp.jpg', 'uploads_store/pcm0bqnnts4pz9a2flgp', '2023-09-03 16:35:46', '2023-09-03 16:35:46'),
(39, '32', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758945/uploads_store/t5rf9fmblazmrod4cbsl.jpg', 'uploads_store/t5rf9fmblazmrod4cbsl', '2023-09-03 16:35:46', '2023-09-03 16:35:46'),
(40, '32', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758945/uploads_store/btoppdxqxrhd9pwdhjjd.jpg', 'uploads_store/btoppdxqxrhd9pwdhjjd', '2023-09-03 16:35:46', '2023-09-03 16:35:46'),
(41, '32', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693758945/uploads_store/tsvy0wstxbch20qdvfwe.webp', 'uploads_store/tsvy0wstxbch20qdvfwe', '2023-09-03 16:35:46', '2023-09-03 16:35:46'),
(42, '33', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693759052/uploads_store/fzmalxp7knyi0tpyrhqv.webp', 'uploads_store/fzmalxp7knyi0tpyrhqv', '2023-09-03 16:37:34', '2023-09-03 16:37:34'),
(43, '33', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693759052/uploads_store/ekrkbxptugg05wnxwbvy.webp', 'uploads_store/ekrkbxptugg05wnxwbvy', '2023-09-03 16:37:34', '2023-09-03 16:37:34'),
(44, '33', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693759052/uploads_store/cr8jin4ru0trhmn5bmvc.webp', 'uploads_store/cr8jin4ru0trhmn5bmvc', '2023-09-03 16:37:34', '2023-09-03 16:37:34'),
(45, '33', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693759052/uploads_store/n0ydvz3iwjq9hjwygn9d.webp', 'uploads_store/n0ydvz3iwjq9hjwygn9d', '2023-09-03 16:37:34', '2023-09-03 16:37:34'),
(46, '33', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693759052/uploads_store/owvkbodvyqzae8nzfyyd.webp', 'uploads_store/owvkbodvyqzae8nzfyyd', '2023-09-03 16:37:34', '2023-09-03 16:37:34'),
(47, '34', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693759162/uploads_store/uxhlhflvc0wzpzmqno5w.webp', 'uploads_store/uxhlhflvc0wzpzmqno5w', '2023-09-03 16:39:23', '2023-09-03 16:39:23'),
(48, '34', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693759162/uploads_store/clil2qmecl8kgpjxh00n.webp', 'uploads_store/clil2qmecl8kgpjxh00n', '2023-09-03 16:39:23', '2023-09-03 16:39:23'),
(49, '34', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693759162/uploads_store/swqo8e2rjigtfwfzcte1.webp', 'uploads_store/swqo8e2rjigtfwfzcte1', '2023-09-03 16:39:23', '2023-09-03 16:39:23'),
(50, '26', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693899006/uploads_store/pxz6ixfoogqolb60nkd9.jpg', 'uploads_store/pxz6ixfoogqolb60nkd9', '2023-09-05 07:30:07', '2023-09-05 07:30:07'),
(51, '26', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693899005/uploads_store/g4g4kjvb7hptdvlmjyby.webp', 'uploads_store/g4g4kjvb7hptdvlmjyby', '2023-09-05 07:30:07', '2023-09-05 07:30:07'),
(52, '26', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693899007/uploads_store/jmeanoc6q3w1gyzxxxmr.jpg', 'uploads_store/jmeanoc6q3w1gyzxxxmr', '2023-09-05 07:30:07', '2023-09-05 07:30:07');

-- --------------------------------------------------------

INSERT INTO "OrderDetail" ("id", "orderId", "productId", "quantity", "createdAt", "updatedAt") VALUES
(10, 15, 20, 20, '2023-09-03 17:05:23', '2023-09-03 17:05:23'),
(11, 16, 7, 4, '2023-09-04 10:29:56', '2023-09-04 10:29:56'),
(12, 17, 3, 1, '2023-09-05 15:37:08', '2023-09-05 15:37:08'),
(13, 18, 3, 1, '2023-09-07 10:33:23', '2023-09-07 10:33:23');

INSERT INTO "Orders" ("id", "userId", "totalPrice", "statusPayment", "timeOrder", "createdAt", "updatedAt") VALUES
(15, 23, 500000, 'SP3', '04/09/2023, 12:05 AM', '2023-09-03 17:05:23', '2023-09-04 10:31:28'),
(16, 24, 300000, 'SP3', '04/09/2023, 5:29 PM', '2023-09-04 10:29:56', '2023-09-04 10:31:27'),
(17, 25, 49000, 'SP3', '05/09/2023, 10:37 PM', '2023-09-05 15:37:08', '2023-09-07 10:09:57'),
(18, 26, 49000, 'SP2', '07/09/2023, 5:33 PM', '2023-09-07 10:33:23', '2023-09-08 13:37:37');

-- --------------------------------------------------------

INSERT INTO "Products" ("id", "name", "description", "category", "image", "originalPrice", "quantitySold", "cloudId", "createdAt", "updatedAt") VALUES
(3, 'Espresso Đá', 'Một tách Espresso nguyên bản được bắt đầu bởi những hạt Arabica chất lượng, phối trộn với tỉ lệ cân đối hạt Robusta, cho ra vị ngọt caramel, vị chua dịu và sánh đặc.\n', 'CA1', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693760011/uploads_product/e3sayoa6mmvnwhxqxfpc.webp', 49000, 2, 'uploads_product/e3sayoa6mmvnwhxqxfpc', '2023-08-30 16:31:46', '2023-09-07 10:33:23'),
(4, 'Bạc Sỉu', 'Bạc sỉu chính là \"Ly sữa trắng kèm một chút cà phê\". Thức uống này rất phù hợp những ai vừa muốn trải nghiệm chút vị đắng của cà phê vừa muốn thưởng thức vị ngọt béo ngậy từ sữa.', 'CA1', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693465124/uploads_product/pzaar14tf2yt3mckliv1.jpg', 29000, 0, 'uploads_product/pzaar14tf2yt3mckliv1', '2023-08-31 06:58:43', '2023-08-31 06:58:43'),
(5, 'Caramel Macchiato Đá', 'Khuấy đều trước khi sử dụng Caramel Macchiato sẽ mang đến một sự ngạc nhiên thú vị khi vị thơm béo của bọt sữa, sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng và vị ngọt đậm của sốt caramel được gói gọn trong một tách cà phê.', 'CA1', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693465205/uploads_product/knedyapfhblhvhs06cql.webp', 55000, 2, 'uploads_product/knedyapfhblhvhs06cql', '2023-08-31 07:00:04', '2023-09-03 17:02:19'),
(6, 'Đường Đen Marble Latte', 'Đường Đen Marble Latte êm dịu cực hấp dẫn bởi vị cà phê đắng nhẹ hoà quyện cùng vị đường đen ngọt thơm và sữa tươi béo mịn. Sự kết hợp đầy mới mẻ của cà phê và đường đen cũng tạo nên diện mạo phân tầng đẹp mắt. Đây là lựa chọn đáng thử để bạn khởi đầu ngày mới đầy hứng khởi. - Khuấy đều trước khi sử dụng', 'CA1', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693465234/uploads_product/ftmmecumzy9ilw7lwze0.webp', 55000, 1, 'uploads_product/ftmmecumzy9ilw7lwze0', '2023-08-31 07:00:33', '2023-09-03 17:02:19'),
(7, 'Cà Phê Sữa Đá Chai Fresh 250ML', 'Vẫn là hương vị cà phê sữa đậm đà quen thuộc của The Coffee House nhưng khoác lên mình một chiếc áo mới tiện lợi hơn, tiết kiệm hơn phù hợp với bình thường mới, giúp bạn tận hưởng một ngày dài trọn vẹn. *Sản phẩm dùng ngon nhất trong ngày. *Sản phẩm mặc định mức đường và không đá.', 'CA1', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693465285/uploads_product/nhwj6r4inzp9wur48wv4.webp', 75000, 4, 'uploads_product/nhwj6r4inzp9wur48wv4', '2023-08-31 07:01:24', '2023-09-04 10:29:56'),
(8, 'CloudFee Hạnh Nhân Nướng', 'Vị đắng nhẹ từ cà phê phin truyền thống kết hợp Espresso Ý, lẫn chút ngọt ngào của kem sữa và lớp foam trứng cacao, nhấn thêm hạnh nhân nướng thơm bùi, kèm topping thạch cà phê dai giòn mê ly. Tất cả cùng quyện hoà trong một thức uống làm vị giác \"thức giấc\", thơm ngon hết nấc.', 'CA1', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693465736/uploads_product/ktnt9w47hjxzz0lnx31d.webp', 49000, 0, 'uploads_product/ktnt9w47hjxzz0lnx31d', '2023-08-31 07:08:55', '2023-08-31 07:08:55'),
(9, 'Frosty Bánh Kem Dâu', 'Bồng bềnh như một đám mây, Đá Xay Frosty Bánh Kem Dâu vừa ngon mắt vừa chiều vị giác bằng sự ngọt ngào. Bắt đầu bằng cái chạm môi với lớp kem whipping cream, cảm nhận ngay vị beo béo lẫn sốt dâu thơm lừng. Sau đó, hút một ngụm là cuốn khó cưỡng bởi đá xay mát lạnh quyện cùng sốt dâu ngọt dịu. Lưu ý: Khuấy đều phần đá xay trước khi dùng', 'CA4', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693465784/uploads_product/j2ehyy5l9iz2qllqznt0.webp', 59000, 0, 'uploads_product/j2ehyy5l9iz2qllqznt0', '2023-08-31 07:09:43', '2023-08-31 07:09:43'),
(10, 'Frosty Cà Phê Đường Đen', 'Đá Xay Frosty Cà Phê Đường Đen mát lạnh, sảng khoái ngay từ ngụm đầu tiên nhờ sự kết hợp vượt chuẩn vị quen giữa Espresso đậm đà và Đường Đen ngọt thơm. Đặc biệt, whipping cream beo béo cùng thạch cà phê giòn dai, đậm vị nhân đôi sự hấp dẫn, khơi bừng sự hứng khởi trong tích tắc.', 'CA4', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693465809/uploads_product/zbmmgvxxv3ebg56hbjqh.webp', 59000, 0, 'uploads_product/zbmmgvxxv3ebg56hbjqh', '2023-08-31 07:10:08', '2023-08-31 07:10:08'),
(11, 'Frosty Choco Chip', 'Đá Xay Frosty Choco Chip, thử là đã! Lớp whipping cream bồng bềnh, beo béo lại có thêm bột sô cô la và sô cô la chip trên cùng. Gấp đôi vị ngon với sô cô la thật xay với đá sánh mịn, đậm đà đến tận ngụm cuối cùng.', 'CA4', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693465834/uploads_product/wnxnonvumjsdmqzorruy.webp', 59000, 0, 'uploads_product/wnxnonvumjsdmqzorruy', '2023-08-31 07:10:34', '2023-08-31 07:10:34'),
(12, 'Frosty Phin Gato', 'Đá Xay Frosty Phin-Gato là lựa chọn không thể bỏ lỡ cho tín đồ cà phê. Cà phê nguyên chất pha phin truyền thống, thơm đậm đà, đắng mượt mà, quyện cùng kem sữa béo ngậy và đá xay mát lạnh. Nhân đôi vị cà phê nhờ có thêm thạch cà phê đậm đà, giòn dai. Thức uống khơi ngay sự tỉnh táo tức thì. Lưu ý: Khuấy đều phần đá xay trước khi dùng', 'CA4', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693465865/uploads_product/gsyzdqmkhci4iqc9tq7t.webp', 55000, 0, 'uploads_product/gsyzdqmkhci4iqc9tq7t', '2023-08-31 07:11:04', '2023-08-31 07:11:04'),
(13, 'Frosty Caramel Arabica', 'Caramel ngọt thơm quyện cùng cà phê Arabica Cầu Đất đượm hương gỗ thông, hạt dẻ và nốt sô cô la đặc trưng tạo nên Đá Xay Frosty Caramel Arabica độc đáo chỉ có tại Nhà. Cực cuốn với lớp whipping cream béo mịn, thêm thạch cà phê giòn ngon bắt miệng.\n\n', 'CA4', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693465910/uploads_product/kj0g4ly4ra1jltv3ombi.webp', 59000, 0, 'uploads_product/kj0g4ly4ra1jltv3ombi', '2023-08-31 07:11:50', '2023-08-31 07:11:50'),
(14, 'Trà Xanh Latte (Nóng)', 'Trà Xanh Latte (Nóng) là phiên bản rõ vị trà nhất. Nhấp một ngụm, bạn chạm ngay vị trà xanh Tây Bắc chát nhẹ hoà cùng sữa nguyên kem thơm béo, đọng lại hậu vị ngọt ngào, êm dịu. Không chỉ là thức uống tốt cho sức khoẻ, Trà Xanh Latte (Nóng) còn là cái ôm ấm áp của đồng bào Tây Bắc gửi cho người miền xuôi.', 'CA2', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693466004/uploads_product/a0y3eb3imfo7rnkkf11r.webp', 45000, 0, 'uploads_product/a0y3eb3imfo7rnkkf11r', '2023-08-31 07:13:23', '2023-08-31 07:13:23'),
(15, 'Trà Xanh Latte', 'Không cần đến Tây Bắc mới cảm nhận được sự trong trẻo của núi rừng, khi Trà Xanh Latte từ Nhà được chắt lọc từ những búp trà xanh mướt, ủ mình trong sương sớm. Trà xanh Tây Bắc vị thanh, chát nhẹ hoà cùng sữa tươi nguyên kem ngọt béo tạo nên hương vị dễ uống, dễ yêu. Đây là thức uống healthy, giúp bạn tỉnh táo một cách êm mượt, xoa dịu những căng thẳng.', 'CA2', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693466032/uploads_product/sjeggrf4dy0mawvrvtds.webp', 45000, 0, 'uploads_product/sjeggrf4dy0mawvrvtds', '2023-08-31 07:13:51', '2023-08-31 07:13:51'),
(16, 'Trà Xanh Xoài Đá Tuyết', 'Tận hưởng sự trong trẻo, mát lành của sương sớm vùng cao gói trọn vào Trà Xanh Xoài Đá Tuyết. Trà xanh chát nhẹ kết hợp Xoài Nhiệt Đới ngọt thanh mang đến thức uống giải nhiệt đầy sảng khoái. Trà xanh Tây Bắc còn tốt cho sức khoẻ, đẹp làn da nhờ có nhiều dưỡng chất và vitamin, gấp 3 lần chất chống oxy hóa so với trà xanh thông thường. Khuấy đều trước khi dùng, để thưởng thức đúng vị.', 'CA2', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693466059/uploads_product/vo7ayqui1jxkkssaan7y.webp', 69000, 0, 'uploads_product/vo7ayqui1jxkkssaan7y', '2023-08-31 07:14:18', '2023-08-31 07:14:18'),
(17, 'Trà Xanh Đường Đen', 'Trà Xanh Đường Đen với hiệu ứng phân tầng đẹp mắt, như phác hoạ núi đồi Tây Bắc bảng lảng trong sương mây, thấp thoáng những nương chè xanh ngát. Từng ngụm là sự hài hoà từ trà xanh đậm đà, đường đen ngọt ngào, sữa tươi thơm béo. Khuấy đều trước khi dùng, để thưởng thức đúng vị', 'CA2', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693466087/uploads_product/cyufk5i0wakpbsttslq2.webp', 55000, 0, 'uploads_product/cyufk5i0wakpbsttslq2', '2023-08-31 07:14:46', '2023-08-31 07:14:46'),
(18, 'Trà Đào Cam Sả Đá', 'Vị thanh ngọt của đào, vị chua dịu của Cam Vàng nguyên vỏ, vị chát của trà đen tươi được ủ mới mỗi 4 tiếng, cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này.', 'CA2', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693466123/uploads_product/glal38cbqiymkvwjwo2e.webp', 49000, 1, 'uploads_product/glal38cbqiymkvwjwo2e', '2023-08-31 07:15:22', '2023-09-03 17:02:19'),
(19, 'Trà Long Nhãn Hạt Sen', 'Thức uống mang hương vị của nhãn, của sen, của trà Oolong đầy thanh mát cho tất cả các thành viên trong dịp Tết này. An lành, thư thái và đậm đà chính là những gì The Coffee House mong muốn gửi trao đến bạn và gia đình.', 'CA2', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693466148/uploads_product/gzbj54yb3p3xuvbpj86i.webp', 49000, 0, 'uploads_product/gzbj54yb3p3xuvbpj86i', '2023-08-31 07:15:47', '2023-08-31 07:15:47'),
(20, 'Bánh Mì Gậy Gà Kim Quất', 'Phiên bản nâng cấp với trọng lượng tăng 80% so với bánh mì que thông thường, đem đến cho bạn bữa ăn nhanh gọn mà vẫn đầy đủ dinh dưỡng. Cắn một miếng là mê mẩn bởi vỏ bánh nướng giòn rụm, nhân đậm vị với từng miếng thịt gà mềm, ướp sốt kim quất chua ngọt, thơm nức đặc trưng. Càng \"đúng bài\" hơn khi thưởng thức kèm Cà phê đượm vị hoặc trà Hi-Tea thanh mát.', 'CA3', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693466199/uploads_product/k9ccs7vyxwy1mr0tskdn.webp', 25000, 20, 'uploads_product/k9ccs7vyxwy1mr0tskdn', '2023-08-31 07:16:38', '2023-09-03 17:05:23'),
(21, 'Bánh Mì VN Thịt Nguội', 'Gói gọn trong ổ bánh mì Việt Nam là từng lớp chả, từng lớp jambon hòa quyện cùng bơ và pate thơm lừng, thêm dưa rau cho bữa sáng đầy năng lượng. *Phần bánh sẽ ngon và đậm đà nhất khi kèm pate. Để đảm bảo hương vị được trọn vẹn, Nhà mong bạn thông cảm vì không thể thay đổi định lượng pate.', 'CA3', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693466220/uploads_product/rtytw4uhszeru6dg1flk.webp', 35000, 0, 'uploads_product/rtytw4uhszeru6dg1flk', '2023-08-31 07:16:59', '2023-08-31 07:16:59'),
(22, 'Mousse Gấu Chocolate', 'Với vẻ ngoài đáng yêu và hương vị ngọt ngào, thơm béo nhất định bạn phải thử ít nhất 1 lần.', 'CA3', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693466264/uploads_product/myp207xpuje1sc3w4yjx.webp', 39000, 0, 'uploads_product/myp207xpuje1sc3w4yjx', '2023-08-31 07:17:43', '2023-08-31 07:17:43'),
(23, 'Mousse Tiramisu', 'Hương vị dễ ghiền được tạo nên bởi chút đắng nhẹ của cà phê, lớp kem trứng béo ngọt dịu hấp dẫn', 'CA3', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693466286/uploads_product/ypzodubk38fy6lldwxgr.webp', 35000, 0, 'uploads_product/ypzodubk38fy6lldwxgr', '2023-08-31 07:18:05', '2023-08-31 07:18:05'),
(24, 'Gà Xé Lá Chanh', 'Thịt gà được xé tơi, mang hương vị mặn, ngọt, cay cay quyện nhau vừa chuẩn, thêm chút thơm thơm thơm từ lá chanh sấy khô giòn giòn xua tan ngay cơn buồn miệng.', 'CA3', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693466316/uploads_product/f6au0p1pgd0ownzksntc.webp', 25000, 0, 'uploads_product/f6au0p1pgd0ownzksntc', '2023-08-31 07:18:35', '2023-08-31 07:18:35'),
(25, 'Mít Sấy', 'Mít sấy khô vàng ươm, giòn rụm, giữ nguyên được vị ngọt lịm của mít tươi.', 'CA3', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693466335/uploads_product/c8h002pobvo6bzkdrjja.webp', 20000, 0, 'uploads_product/c8h002pobvo6bzkdrjja', '2023-08-31 07:18:54', '2023-08-31 07:18:54'),
(26, 'Mochi Kem Chocolate', 'Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân chocolate độc đáo. Gọi 1 chiếc Mochi cho ngày thật tươi mát. Sản phẩm phải bảo quán mát và dùng ngon nhất trong 2h sau khi nhận hàng.', 'CA3', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693466759/uploads_product/aoqcpipuyz8qdlt5xlt1.webp', 19000, 0, 'uploads_product/aoqcpipuyz8qdlt5xlt1', '2023-08-31 07:25:58', '2023-08-31 07:25:58'),
(27, 'Mochi Kem Việt Quất', 'Bao bọc bởi lớp vỏ Mochi dẻo thơm, bên trong là lớp kem lạnh cùng nhân việt quất đặc trưng thơm thơm, ngọt dịu. Gọi 1 chiếc Mochi cho ngày thật tươi mát. Sản phẩm phải bảo quán mát và dùng ngon nhất trong 2h sau khi nhận hàng.', 'CA3', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693466781/uploads_product/emmc4ffu6ec21gobauze.webp', 19000, 0, 'uploads_product/emmc4ffu6ec21gobauze', '2023-08-31 07:26:20', '2023-08-31 07:26:20'),
(28, 'Mousse Red Velvet', 'Bánh nhiều lớp được phủ lớp kem bên trên bằng Cream cheese.', 'CA3', 'https://res.cloudinary.com/dqi9ub7dw/image/upload/v1693466815/uploads_product/rqtsmo8v5vbhrhxkgjza.webp', 35000, 0, 'uploads_product/rqtsmo8v5vbhrhxkgjza', '2023-08-31 07:26:54', '2023-08-31 07:26:54');

-- --------------------------------------------------------
--
-- Dumping data for table "sequelizemeta"
--

INSERT INTO "sequelizemeta" ("name") VALUES
('migration-create-Allcodes.js'),
('migration-create-image-store.js'),
('migration-create-order-detail.js'),
('migration-create-Orders.js'),
('migration-create-Products.js'),
('migration-create-Stores.js'),
('migration-create-Users.js');

-- --------------------------------------------------------
INSERT INTO "Stores" ("id", "nameStore", "address", "description", "cityId", "shortDescription", "mapLink", "mapHTML", "createdAt", "updatedAt") VALUES
(24, 'HCM SIGNATURE by The Coffee House', 'TTTM Crescent Mall, 101 Tôn Dật Tiên, Phường Tân Phú, Quận 7, Thành phố Hồ Chí Minh', 'Nhà tin rằng “cuộc hẹn cà phê” luôn có cho mình những tiêu chuẩn, phiên bản khác nhau, chúng luôn biến hoá mỗi ngày. Và SIGNATURE by The Coffee House là nơi bạn tìm thấy phiên bản đặc biệt của Cuộc hẹn tròn đầy giữa những ngày hối hả.Hôm nay bạn có hẹn chưa? Mình cà phê nhé!', 'C2', 'SIGNATURE by The Coffee House là nơi bạn tìm thấy phiên bản đặc biệt của Cuộc hẹn tròn đầy giữa những ngày hối hả.Hôm nay bạn có hẹn chưa? Mình cà phê nhé!', 'https://goo.gl/maps/GNECv3X62dJwG58P7', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d980.0164805644998!2d106.718693!3d10.729399!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f43c6bc27a1%3A0xcf4129681fbda044!2sSIGNATURE%20By%20The%20Coffee%20House!5e0!3m2!1svi!2sus!4v1693409337037!5m2!1svi!2sus\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>', '2023-08-30 16:38:47', '2023-08-30 16:38:47'),
(25, 'HCM Hoàng Việt', '17 Út tịch, Q. Tân Bình, Hồ Chí Minh', 'Không khí đang cực kì rộn ràng tại The Coffee House 16/3 Hoàng Việt, Q. Tân Bình, Hồ Chí Minh. Những món quà đang được The Coffee House trao tay, những nụ cười, chuyện trò vui vẻ đang được khơi dậy quanh ly cà phê. Các barista tại cửa hàng Hoàng Việt đang làm việc hết công suất để phục vụ những vị khách đầu tiên!', 'C2', 'Không khí đang cực kì rộn ràng tại The Coffee House 16/3 Hoàng Việt, Q. Tân Bình, Hồ Chí Minh. Những món quà đang được The Coffee House trao tay, những nụ cười, chuyện trò vui vẻ đang được khơi dậy quanh ly cà phê', 'https://goo.gl/maps/sZ8HKAWbLaAshE157', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d489.9002636641899!2d106.658905!3d10.795827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529e760480639%3A0x390cb8069fd0a50d!2sThe%20Coffee%20House%20-%20%C3%9At%20T%E1%BB%8Bch!5e0!3m2!1svi!2sus!4v1693467267465!5m2!1svi!2sus\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>', '2023-08-31 07:34:56', '2023-08-31 07:34:56'),
(26, 'HN Nguyễn Văn Cừ', '149 Nguyễn Văn Cừ, Ngọc Lâm, Long Biên, Hà Nội', 'Ẩn mình sau những ô cửa kính bắt ánh sáng tự nhiên, là hương cà phê nguyên bản đang chờ bạn thưởng thức, là những bản nhạc du dương và không gian rộng rãi truyền cảm hứng, nơi có những góc bàn riêng tư để bạn yên tĩnh làm việc và thoải mái trò chuyện cùng hội bạn thân.', 'C1', 'Ẩn mình sau những ô cửa kính bắt ánh sáng tự nhiên, là hương cà phê nguyên bản đang chờ bạn thưởng thức, là những bản nhạc du dương và không gian rộng rãi truyền cảm hứng.', 'https://goo.gl/maps/WkZJWyrvPskuWDmp7', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d465.4651364318099!2d105.87195000000001!3d21.043843!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abd6e8ad8703%3A0x31bf65389a742002!2zMTQ5IMSQLiBOZ3V54buFbiBWxINuIEPhu6ssIE5n4buNYyBMw6JtLCBMb25nIEJpw6puLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2sus!4v1693467377844!5m2!1svi!2sus\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>', '2023-08-31 07:36:34', '2023-09-05 07:30:01'),
(27, 'HN Aeon Mall Hà Đông', 'AEON Mall Hà Đông, Dương Nội, Hà Đông, Hà Nội.', 'TRỜI VÀO ĐÔNG THÌ GHÉ NHÀ HÀ ĐÔNG THÔI! Vì Nhà mới tại Aeon mall Hà Đông đã sẵn sàng mang những thức uống phiên bản nóng trứ danh, cùng với không gian ấm cúng được thiết kế đầy hiện đại và mới lạ chỉ riêng Nhà Hà Đông mới có, để cho mùa đông của bạn không lạnh và tha hồ check in sống ảo rồi đây. Chờ gì nữa, lành lạnh mà tới Nhà sẽ ấm áp ngay, hay là mua sắm nhiều quá thì ghé Nhà mới làm 1 hơi rồi mua sắm tiếp nhé, team Hà Nội ơi!', 'C1', 'TRỜI VÀO ĐÔNG THÌ GHÉ NHÀ HÀ ĐÔNG THÔI! Vì Nhà mới tại Aeon mall Hà Đông đã sẵn sàng mang những thức uống phiên bản nóng trứ danh, cùng với không gian ấm cúng được thiết kế đầy hiện đại và mới lạ chỉ riêng Nhà Hà Đông mới có, để cho mùa đông của bạn không lạnh và tha hồ check in sống ảo rồi đây', 'https://goo.gl/maps/Uczwif3X4VoQMJnH7', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7450.152519791453!2d105.750863!3d20.98958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134538bfb9ef85d%3A0x530640dff57d0ec!2sThe%20Coffee%20House!5e0!3m2!1sen!2sus!4v1693467717282!5m2!1sen!2sus\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>', '2023-08-31 07:42:14', '2023-08-31 07:42:14'),
(28, '  DAN Núi Thành', '01 Núi Thành, Phường, Hải Châu, Đà Nẵng', 'Nhà thứ 9 \"thả thính\" không gian mới lạ đặc biệt nhất Nhà Đà Nẵng! Cột mốc thứ 9 với không gian ấm áp phía sau các ô kính, những góc tường phá cách trẻ trung, cứ chụp là có hình “thả thính\" ngay, chờ gì nữa mà không check - in liền nào. Bạn sẽ đi cùng ai đây? Tag liền cả hội vào ngay nào!', 'C3', 'Nhà thứ 9 \"thả thính\" không gian mới lạ đặc biệt nhất Nhà Đà Nẵng!', 'https://goo.gl/maps/eRWAyTaScDT2xvgG6', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30673.13791461137!2d108.220307!3d16.058107!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142193a997c2d63%3A0xd0fae85b47a55b69!2sThe%20Coffee%20House!5e0!3m2!1sen!2sus!4v1693758463054!5m2!1sen!2sus\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>', '2023-09-03 16:27:56', '2023-09-03 16:27:56'),
(29, 'DAN Nguyễn Văn Linh', 'Lô A4 - 2 Nguyễn Văn Linh, Bình Hiên, Hải Châu, Đà Nẵng', 'Nằm trên con đường tấp nập ra cầu Rồng - biểu tượng phồn vinh của thành phố Đà Nẵng. Cửa hàng Nguyễn Văn Linh với không gian xanh mát ngập tràn, hoà mình vào nhịp sống sôi nổi và nồng hậu của Đà Nẵng. Là nơi lí tưởng để học tập hay hò hẹn bạn bè.', 'C3', 'Cửa hàng Nguyễn Văn Linh với không gian xanh mát ngập tràn, hoà mình vào nhịp sống sôi nổi và nồng hậu của Đà Nẵng. Là nơi lí tưởng để học tập hay hò hẹn bạn bè.', 'https://goo.gl/maps/PMt69Rs53tQorfkT8', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7668.18411564699!2d108.221773!3d16.060712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219cc595768af%3A0x6a8f3945d3f414c3!2sThe%20Coffee%20House!5e0!3m2!1sen!2sus!4v1693758616530!5m2!1sen!2sus\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>', '2023-09-03 16:30:28', '2023-09-03 16:30:28'),
(30, 'DAN Trần Hưng Đạo', '461 Trần Hưng Đạo, An Hải Trung, Sơn Trà, Đà Nẵng', 'Xông đất, xem Lân cùng cửa hàng mới tại 461 Trần Hưng Đạo, Q. Sơn Trà, TP. Đà Nẵng.', 'C3', 'Xông đất, xem Lân cùng cửa hàng mới tại 461 Trần Hưng Đạo, Q. Sơn Trà, TP. Đà Nẵng.', 'https://goo.gl/maps/g4jj4zkeio2ynepLA', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7668.044004733546!2d108.230134!3d16.064348!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142182cc129438f%3A0x622e8b771871b1a9!2sThe%20Coffee%20House!5e0!3m2!1sen!2sus!4v1693758686067!5m2!1sen!2sus\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>', '2023-09-03 16:31:37', '2023-09-03 16:31:37'),
(31, 'HCM Ấp Bắc', '4 - 6 Ấp Bắc, Q. Tân Bình, Hồ Chí Minh', 'Nhà Ấp Bắc vừa quay trở lại với diện mạo vừa lạ vừa quen. Nhiều góc bàn đẹp cùng cửa kính to đầy nắng cực hợp để bạn check-in trăm tấm hình hay ngồi chuyện trò thật thư giãn', 'C2', 'Nhà Ấp Bắc vừa quay trở lại với diện mạo vừa lạ vừa quen. Nhiều góc bàn đẹp cùng cửa kính to đầy nắng cực hợp để bạn check-in trăm tấm hình hay ngồi chuyện trò thật thư giãn', 'https://goo.gl/maps/WG5FjjPf5xyrLHgz9', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1003300.102915611!2d106.641609!3d10.800509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294e2d3a7f41%3A0xfe3a8e8698313043!2zVGhlIENvZmZlZSBIb3VzZSAtIOG6pHAgQuG6r2M!5e0!3m2!1svi!2sus!4v1693758767909!5m2!1svi!2sus\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>', '2023-09-03 16:33:00', '2023-09-03 16:33:00'),
(32, 'HCM Huỳnh Tấn Phát', '400A Huỳnh Tấn Phát, Quận 7, Hồ Chí Minh', 'Cửa hàng The Coffee House Huỳnh Tấn Phát mang không rộng lớn, thoáng đãng nhưng vẫn giữ được sự ấm cúng. Cùng với hương vị Nhà quen thuộc, đây sẽ là địa điểm vô cùng thích hợp cho những buỗi hẹn họ cùng người thương hay tụ tập tám chuyện cùng bạn bè mỗi ngày.', 'C2', 'Cùng với hương vị Nhà quen thuộc, đây sẽ là địa điểm vô cùng thích hợp cho những buỗi hẹn họ cùng người thương hay tụ tập tám chuyện cùng bạn bè mỗi ngày.', 'https://goo.gl/maps/UxVq8sV7uirxEJeE9', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.8399435302003!2d106.72630987465854!3d10.74681615973997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752581788447e5%3A0x6ab955eff9a7a1d4!2zVGhlIENvZmZlZSBIb3VzZSAtIEh14buzbmggVOG6pW4gUGjDoXQ!5e0!3m2!1svi!2s!4v1693758933866!5m2!1svi!2s\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>', '2023-09-03 16:35:44', '2023-09-03 16:35:44'),
(33, 'HN The Park Home', 'Lô D12 KĐT, Thành Thái, Dịch Vọng, Cầu Giấy, Hà Nội', 'Nhà mới tại Cầu Giấy mang đến không gian “chanh sả” hiện đại với tone cam trẻ trung, thiết kế nhấn nhá những ô cửa kính lớn cùng hệ thống đèn chiếu sáng hứa hẹn cho ra đời những chiếc ảnh check-in siêu xinh.', 'C1', 'Nhà mới tại Cầu Giấy mang đến không gian “chanh sả” hiện đại với tone cam trẻ trung, thiết kế nhấn nhá những ô cửa kính lớn cùng hệ thống đèn chiếu sáng hứa hẹn cho ra đời những chiếc ảnh check-in siêu xinh.', 'https://goo.gl/maps/CgkP4LpzwkuCfcdcA', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1862.0276250384602!2d105.78717143851098!3d21.030475198703332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab6f0f8348d3%3A0xb4cb6b7de7b684d4!2sThe%20Coffee%20House!5e0!3m2!1svi!2sus!4v1693759040720!5m2!1svi!2sus\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>', '2023-09-03 16:37:30', '2023-09-03 16:37:30'),
(34, 'HN Trần Kim Xuyến', 'Ô số 01A1, Tầng 1, Chung cư E2-Chelsea Residences Trần Kim Xuyến, Khu ĐTM Yên Hòa, Cầu Giấy, Hà Nội, Việt Nam', ' ', 'C1', ' ', 'https://goo.gl/maps/8tx47RuroKnt6FRX9', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1467.3698117100391!2d105.79394330495198!3d21.019321885446004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7b56af8f41%3A0x8b391a58e862b99a!2sThe%20Coffee%20House!5e0!3m2!1svi!2sus!4v1693759145903!5m2!1svi!2sus\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>', '2023-09-03 16:39:21', '2023-09-03 16:39:21');

-- --------------------------------------------------------
--
-- Dumping data for table "Users"
--

INSERT INTO "Users" ("id", "email", "password", "firstName", "lastName", "address", "phone", "roleId", "isApproved", "createdAt", "updatedAt") VALUES
(7, 'bala', NULL, 'bbbb', 'lallalal', 'advdavdavdav', 'âcdv', 'R2', NULL, '2023-08-17 11:11:02', '2023-08-17 11:11:02'),
(8, 'nbsrefwdqs', NULL, 'agbfvds', 'h gdfbvd', 'g fvdcs', 'gdfbvdsc', 'R2', NULL, '2023-08-17 11:24:11', '2023-08-17 11:24:11'),
(11, 'utytr', NULL, 'ythrgefw', 'hmnggefwd', 'gnfd', 'ngffd', 'R2', NULL, '2023-08-17 11:32:21', '2023-08-17 11:32:21'),
(12, 'rtberwfqd', NULL, 'gbdfvedw', ' fgvrefdw', 'gbrved2w1', 'fgbefd2', 'R2', NULL, '2023-08-17 16:16:38', '2023-08-17 16:16:38'),
(15, 'hung@gmail.com', NULL, 'Hung', 'Viet', 'Bac Ninh', '0999998888', 'R2', NULL, '2023-08-18 15:36:01', '2023-08-18 15:36:01'),
(18, 'admin1@gmail.com', '$2b$10$stBYC5KL0uT2Whmg33evRePeQJInYJnbaDItKFiczMNWU2HFI45QO', 'admin', 'test', 'test', '00000000000', 'R1', 1, '2023-08-19 16:16:05', '2023-08-31 06:55:57'),
(19, 'admin2@gmail.com', '$2b$10$xOmQdoTIS2P6cKfuvar4mOzcZQdXUX0EiNfiI.TzH9k/7eclf4eeK', 'admin2', 'admin2', 'admin2', '254451252', 'R2', 1, '2023-08-24 17:14:31', '2023-08-31 06:56:17'),
(22, 'test1@gmail.com', NULL, 'test1', 'test1', 'Nơi nào đó', '09999999999', 'R2', NULL, '2023-09-03 17:02:19', '2023-09-03 17:02:19'),
(23, 'test2@gmail.com', NULL, 'test2', 'test2', 'Lo banh mi', '0888888888', 'R2', NULL, '2023-09-03 17:05:23', '2023-09-03 17:05:23'),
(24, 'test3@gmail.com', NULL, 'test3', 'test3', 'jjj', '09999999999', 'R2', NULL, '2023-09-04 10:29:56', '2023-09-04 10:29:56'),
(25, 'test4@gmail.com', NULL, 'tesst4', 'test4', 'tegrfwbfd', '64532', 'R2', NULL, '2023-09-05 15:37:08', '2023-09-05 15:37:08'),
(26, 'gdbfd@gmail.com', NULL, 'etber', 'etbte', 'teb', '63275285', 'R2', NULL, '2023-09-07 10:33:23', '2023-09-07 10:33:23');
--
-- Table structure for table "OrderDetail"
--


CREATE TABLE "Allcodes" (
  "id" integer NOT NULL,
  "type" varchar(255) DEFAULT NULL,
  "keyMap" varchar(255) DEFAULT NULL,
  "valueEn" varchar(255) DEFAULT NULL,
  "valueVn" varchar(255) DEFAULT NULL,
  "createdAt" datetime NOT NULL,
  "updatedAt" datetime NOT NULL
) 

--
-- Dumping data for table "Allcodes"
--


-- --------------------------------------------------------

--
-- Table structure for table "ImageStore"
--

CREATE TABLE "ImageStore" (
  "id" integer NOT NULL,
  "storeId" varchar(255) DEFAULT NULL,
  "image" varchar(255) DEFAULT NULL,
  "cloudId" varchar(255) DEFAULT NULL,
  "createdAt" datetime NOT NULL,
  "updatedAt" datetime NOT NULL
) 

CREATE TABLE "OrderDetail" (
  "id" integer NOT NULL,
  "orderId" integer DEFAULT NULL,
  "productId" integer DEFAULT NULL,
  "quantity" integer DEFAULT NULL,
  "createdAt" datetime NOT NULL,
  "updatedAt" datetime NOT NULL
) 

--
-- Dumping data for table "OrderDetail"
--

-- --------------------------------------------------------

--
-- Table structure for table "Orders"
--

CREATE TABLE "Orders" (
  "id" integer NOT NULL,
  "userId" integer DEFAULT NULL,
  "totalPrice" integer DEFAULT NULL,
  "statusPayment" varchar(255) DEFAULT NULL,
  "timeOrder" varchar(255) DEFAULT NULL,
  "createdAt" datetime NOT NULL,
  "updatedAt" datetime NOT NULL
) 

--
-- Dumping data for table "Orders"
--



--

--
-- Table structure for table "Products"
--

CREATE TABLE "Products" (
  "id" integer NOT NULL,
  "name" varchar(255) DEFAULT NULL,
  "description" text DEFAULT NULL,
  "category" varchar(255) DEFAULT NULL,
  "image" varchar(255) DEFAULT NULL,
  "originalPrice" integer DEFAULT NULL,
  "quantitySold" integer DEFAULT NULL,
  "cloudId" varchar(255) DEFAULT NULL,
  "createdAt" datetime NOT NULL,
  "updatedAt" datetime NOT NULL
) 

--
-- Dumping data for table "Products"
--

-- Table structure for table "sequelizemeta"
--

CREATE TABLE "sequelizemeta" (
  "name" varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


--
-- Table structure for table "Stores"
--

CREATE TABLE "Stores" (
  "id" integer NOT NULL,
  "nameStore" varchar(255) DEFAULT NULL,
  "address" varchar(255) DEFAULT NULL,
  "description" text DEFAULT NULL,
  "cityId" varchar(255) DEFAULT NULL,
  "shortDescription" text DEFAULT NULL,
  "mapLink" text DEFAULT NULL,
  "mapHTML" text DEFAULT NULL,
  "createdAt" datetime NOT NULL,
  "updatedAt" datetime NOT NULL
) 

--
-- Dumping data for table "Stores"
--


--
-- Table structure for table "Users"
--

CREATE TABLE "Users" (
  "id" integer NOT NULL,
  "email" varchar(255) DEFAULT NULL,
  "password" varchar(255) DEFAULT NULL,
  "firstName" varchar(255) DEFAULT NULL,
  "lastName" varchar(255) DEFAULT NULL,
  "address" varchar(255) DEFAULT NULL,
  "phone" varchar(255) DEFAULT NULL,
  "roleId" varchar(255) DEFAULT NULL,
  "isApproved" integer DEFAULT NULL,
 "createdAt" timestamp NOT NULL,
  "updatedAt" timestamp NOT NULL
) 


--
-- Indexes for dumped tables
--

--
-- Indexes for table "Allcodes"
--
ALTER TABLE "Allcodes"
  ADD PRIMARY KEY ("id");

--
-- Indexes for table "ImageStore"
--
ALTER TABLE "ImageStore"
  ADD PRIMARY KEY ("id");

--
-- Indexes for table "OrderDetail"
--
ALTER TABLE "OrderDetail"
  ADD PRIMARY KEY ("id");

--
-- Indexes for table "Orders"
--
ALTER TABLE "Orders"
  ADD PRIMARY KEY ("id");

--
-- Indexes for table "Products"
--
ALTER TABLE "Products"
  ADD PRIMARY KEY ("id");

--
-- Indexes for table "sequelizemeta"
--
ALTER TABLE "sequelizemeta"
  ADD PRIMARY KEY ("name"),
  ADD UNIQUE KEY "name" ("name");

--
-- Indexes for table "Stores"
--
ALTER TABLE "Stores"
  ADD PRIMARY KEY ("id");

--
-- Indexes for table "Users"
--
ALTER TABLE "Users"
  ADD PRIMARY KEY ("id");

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table "Allcodes"
--
ALTER TABLE "Allcodes"
  MODIFY "id" integer NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table "ImageStore"
--
ALTER TABLE "ImageStore"
  MODIFY "id" integer NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table "OrderDetail"
--
ALTER TABLE "OrderDetail"
  MODIFY "id" integer NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table "Orders"
--
ALTER TABLE "Orders"
  MODIFY "id" integer NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table "Products"
--
ALTER TABLE "Products"
  MODIFY "id" integer NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table "Stores"
--
ALTER TABLE "Stores"
  MODIFY "id" integer NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table "Users"
--
ALTER TABLE "Users"
  MODIFY "id" integer NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;