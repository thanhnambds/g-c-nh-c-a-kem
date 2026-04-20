const app = {
    // --- DỮ LIỆU CÂU HỎI CHUYÊN GIA ---
    mathQuestions: [
        { "id": "math_hk2_01", "dang_bai": "cau_tao_so", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Con hãy cho biết số gồm có 5 chục và 2 đơn vị là số nào nhỉ?", "lua_chon": ["25", "52", "50"], "dap_an_dung": "52", "giai_thich": "Con nhớ nhé, 5 chục đứng trước và 2 đơn vị đứng sau nên ta được số 52." },
        { "id": "math_hk2_02", "dang_bai": "phep_tinh", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Con hãy giúp máy tính tính nhẩm phép tính này nhé: 42 + 35 = ?", "lua_chon": ["67", "77", "87"], "dap_an_dung": "77", "giai_thich": "Con cộng hàng đơn vị 2 + 5 = 7, sau đó cộng hàng chục 4 + 3 = 7, kết quả là 77." },
        { "id": "math_hk2_13", "dang_bai": "sap_xep", "kieu_tra_loi": "sap_xep", "cau_hoi": "Con hãy chạm vào các bong bóng theo thứ tự từ Bé đến Lớn nhé!", "lua_chon": [45, 12, 89, 30], "dap_an_dung": [12, 30, 45, 89], "giai_thich": "Con hãy quan sát hàng chục nhé: 1 chục bé nhất, rồi đến 3 chục, 4 chục và cuối cùng là 8 chục." },
        { "id": "math_hk2_03", "dang_bai": "so_sanh", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Con hãy điền dấu thích hợp vào chỗ chấm: 68 ... 86", "lua_chon": [">", "<", "="], "dap_an_dung": "<", "giai_thich": "Số 68 có hàng chục là 6, số 86 có hàng chục là 8. Vì 6 bé hơn 8 nên 68 < 86 con nhé." },
        { "id": "math_hk2_04", "dang_bai": "quy_luat", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Con hãy tìm hai số tiếp theo để hoàn thành dãy số: 10, 20, 30, 40, ..., ...", "lua_chon": ["50, 60", "40, 50", "60, 70"], "dap_an_dung": "50, 60", "giai_thich": "Dãy số này đang tăng thêm 10 (1 chục) đấy con, nên sau 40 sẽ là 50 và 60." },
        { "id": "math_hk2_14", "dang_bai": "sap_xep", "kieu_tra_loi": "sap_xep", "cau_hoi": "Giúp Elsa sắp xếp các túi băng theo thứ tự từ Bé đến Lớn nhé!", "lua_chon": [15, 5, 25, 10], "dap_an_dung": [5, 10, 15, 25], "giai_thich": "Chúng mình đếm từ nhỏ nhé: 5 rồi đến 10, 15 và 25 nè!" },
        { "id": "math_hk2_05", "dang_bai": "loi_van", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Hôm qua Kem hái được 24 bông hoa, hôm nay Kem hái thêm được 12 bông hoa nữa. Hỏi tất cả Kem hái được bao nhiêu bông hoa?", "lua_chon": ["34 bông", "36 bông", "12 bông"], "dap_an_dung": "36 bông", "giai_thich": "Vì Kem hái 'thêm' nên con làm phép tính cộng: 24 + 12 = 36 bông hoa nhé." },
        { "id": "math_hk2_06", "dang_bai": "tu_duy", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Con hãy tìm một số có hai chữ số, biết chữ số hàng chục là 7 và chữ số hàng đơn vị là số liền sau của số 0?", "lua_chon": ["70", "71", "72"], "dap_an_dung": "71", "giai_thich": "Số hàng chục là 7, số hàng đơn vị là 1 (vì số liền sau của 0 là 1), vậy số đó là 71." },
        { "id": "math_hk2_07", "dang_bai": "cau_tao_so", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Số liền trước của số 90 là số nào nhỉ con?", "lua_chon": ["88", "89", "91"], "dap_an_dung": "89", "giai_thich": "Để tìm số liền trước, con chỉ cần lấy số đó bớt đi 1 đơn vị: 90 - 1 = 89." },
        { "id": "math_hk2_08", "dang_bai": "phep_tinh", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Con hãy tính kết quả của phép tính sau: 89 - 46 = ?", "lua_chon": ["43", "45", "33"], "dap_an_dung": "43", "giai_thich": "Con lấy 9 - 6 = 3 ở hàng đơn vị, và 8 - 4 = 4 ở hàng chục. Kết quả là 43." },
        { "id": "math_hk2_09", "dang_bai": "so_sanh", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Đố con dấu nào phù hợp ở đây: 30 + 20 ... 60 - 10", "lua_chon": [">", "<", "="], "dap_an_dung": "=", "giai_thich": "Bên trái 30 + 20 = 50, bên phải 60 - 10 = 50. Hai bên bằng nhau nên con điền dấu = nhé." },
        { "id": "math_hk2_10", "dang_bai": "loi_van", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Trên cây có 58 quả táo, rụng mất 15 quả. Hỏi trên cây còn lại bao nhiêu quả táo?", "lua_chon": ["33", "43", "53"], "dap_an_dung": "43", "giai_thich": "Vì táo bị 'rụng mất' nên con làm phép trừ: 58 - 15 = 43 quả táo." },
        { "id": "math_hk2_11", "dang_bai": "tu_duy", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Số nhỏ nhất có hai chữ số mà chữ số hàng chục và hàng đơn vị giống nhau là số nào?", "lua_chon": ["10", "11", "22"], "dap_an_dung": "11", "giai_thich": "Các số có hai chữ số giống nhau là 11, 22, 33... và số nhỏ nhất trong số đó là 11." },
        { "id": "math_hk2_12", "dang_bai": "quy_luat", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Con hãy giúp bố điền số còn thiếu vào dãy số: 95, 94, 93, ..., 91", "lua_chon": ["92", "96", "90"], "dap_an_dung": "92", "giai_thich": "Dãy số này đang lùi đi 1 đơn vị, số đứng giữa 93 và 91 là 92 con nhé." },
        { "id": "m15", "dang_bai": "do_dai", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Bút chì của Kem dài 12cm, bút mực dài 15cm. Hỏi cả hai bút dài bao nhiêu xăng-ti-mét?", "lua_chon": ["27", "27cm", "3cm"], "dap_an_dung": "27cm", "giai_thich": "Con lấy 12 + 15 = 27 và thêm đơn vị xăng-ti-mét (cm) ở sau nhé." },
        { "id": "m16", "dang_bai": "hinh_hoc", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Bánh chưng ngày Tết có hình gì hả con?", "lua_chon": ["Hình tròn", "Hình vuông", "Hình tam giác"], "dap_an_dung": "Hình vuông", "giai_thich": "Bánh chưng có 4 cạnh bằng nhau nên là hình vuông nhé." },
        { "id": "m17", "dang_bai": "phep_tinh", "kieu_tra_loi": "dien_khuyet", "cau_hoi": "Tính nhẩm rồi điền đáp án nhé: 50 + 40 =", "lua_chon": [], "dap_an_dung": "90", "giai_thich": "5 chục cộng 4 chục là 9 chục (90) đó con." },
        { "id": "m18", "dang_bai": "so_sanh", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Số lớn nhất có một chữ số là số mấy nhỉ?", "lua_chon": ["1", "9", "10"], "dap_an_dung": "9", "giai_thich": "Các số có một chữ số từ 0 đến 9, và 9 là số lớn nhất nhé." },
        { "id": "m19", "dang_bai": "quy_luat", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Tìm số còn thiếu nhé Kem: 5, 10, 15, ..., 25", "lua_chon": ["16", "20", "30"], "dap_an_dung": "20", "giai_thich": "Con đếm thêm 5 vào nhé, 15 thêm 5 sẽ thành 20." },
        { "id": "m20", "dang_bai": "sap_xep", "kieu_tra_loi": "sap_xep", "cau_hoi": "Sắp xếp kích thước các bạn động vật từ Bé đến Lớn nào:", "lua_chon": ["Voi", "Chuột", "Chó"], "dap_an_dung": ["Chuột", "Chó", "Voi"], "giai_thich": "Chuột nhỏ xíu, rồi đến bạn cún, và to nhất là bạn Voi!" },
        { "id": "m21", "dang_bai": "thoi_gian", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Hôm nay là Thứ Năm, hỏi ngày mai là ngày thứ mấy?", "lua_chon": ["Thứ Tư", "Thứ Sáu", "Thứ Bảy"], "dap_an_dung": "Thứ Sáu", "giai_thich": "Sau Thứ Năm là đến Thứ Sáu con nhé." },
        { "id": "m22", "dang_bai": "thoi_gian", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Đồng hồ kim ngắn chỉ số 8, kim dài chỉ số 12. Bây giờ là mấy giờ?", "lua_chon": ["8 giờ", "12 giờ", "8 rưỡi"], "dap_an_dung": "8 giờ", "giai_thich": "Kim ngắn là kim giờ, kim dài chỉ số 12 nghĩa là giờ chẵn, 8 giờ đúng nhé con." },
        { "id": "m23", "dang_bai": "loi_van", "kieu_tra_loi": "dien_khuyet", "cau_hoi": "Bà cho Kem 10 cái kẹo, mẹ ở cơ quan về mua thêm cho Kem 5 cái nữa. Hỏi Kem có bao nhiêu cái kẹo?", "lua_chon": [], "dap_an_dung": "15", "giai_thich": "Kem lấy kẹo của bà cộng với kẹo của mẹ: 10 + 5 = 15 cái nhé." },
        { "id": "m24", "dang_bai": "phep_tinh", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Biểu thức 12 + 5 - 3 bằng bao nhiêu nhé?", "lua_chon": ["14", "17", "10"], "dap_an_dung": "14", "giai_thich": "Mình tính từ trái sang: 12 + 5 = 17, sau đó trừ đi 3 còn 14 nhé." },
        { "id": "m25", "dang_bai": "hinh_hoc", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Lốp xe đạp của bố Nam có hình gì đấy Kem?", "lua_chon": ["Hình chữ nhật", "Hình tròn", "Hình bầu dục"], "dap_an_dung": "Hình tròn", "giai_thich": "Lốp xe lăn tròn nên nó có hình tròn nhé." },
        { "id": "m26", "dang_bai": "so_sanh", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Số nào sau đây lớn hơn 55?", "lua_chon": ["49", "55", "56"], "dap_an_dung": "56", "giai_thich": "56 có cùng hàng chục là 5 nhưng số đơn vị 6 lớn hơn 5, nên 56 lớn hơn 55." },
        { "id": "m27", "dang_bai": "tu_duy", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Nhà Kem nuôi 3 con gà và 2 con thỏ. Hỏi có tất cả bao nhiêu cái chân?", "lua_chon": ["5 chân", "10 chân", "14 chân"], "dap_an_dung": "14 chân", "giai_thich": "Gà có 2 chân (3x2=6), thỏ có 4 chân (2x4=8). Tổng cộng 6 + 8 = 14 chân đó nha!" },
        { "id": "m28", "dang_bai": "cau_tao_so", "kieu_tra_loi": "dien_khuyet", "cau_hoi": "Số liền trước của 100 là số nào?", "lua_chon": [], "dap_an_dung": "99", "giai_thich": "Trước 100 đúng 1 số là bước ngay từ 99 sang đó con." },
        { "id": "m29", "dang_bai": "sap_xep", "kieu_tra_loi": "sap_xep", "cau_hoi": "Xếp các số sau từ Lớn đến Bé nhé:", "lua_chon": [75, 42, 90, 88], "dap_an_dung": [90, 88, 75, 42], "giai_thich": "9 chục bự nhất, rồi đến 88, sau cùng tới 75 và nhỏ xíu là 42." },
        { "id": "m30", "dang_bai": "thoi_gian", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Hôm kia là Thứ Ba, hỏi hôm nay là ngày thứ mấy?", "lua_chon": ["Thứ Tư", "Thứ Năm", "Thứ Sáu"], "dap_an_dung": "Thứ Năm", "giai_thich": "Hôm kia Thứ 3, hôm qua Thứ 4, nên hôm nay sẽ là Thứ Năm!" },
        { "id": "m31", "dang_bai": "loi_van", "kieu_tra_loi": "dien_khuyet", "cau_hoi": "Cành trên có 12 con chim, cành dưới có ít hơn cành trên 5 con. Hỏi cành dưới có mấy con chim?", "lua_chon": [], "dap_an_dung": "7", "giai_thich": "Vì ít hơn nên ta làm phép trừ: 12 - 5 = 7 con nhé." },
        { "id": "m32", "dang_bai": "phep_tinh", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Câu nào sau đây tính sai hả bé Kem?", "lua_chon": ["20 + 30 = 50", "45 - 20 = 25", "18 - 8 = 11"], "dap_an_dung": "18 - 8 = 11", "giai_thich": "18 - 8 chỉ bằng 10 thôi, không bằng 11 được đâu!" },
        { "id": "m33", "dang_bai": "tu_duy", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Mẹ có một chục cái kẹo, mẹ cho Kem 7 cái. Mẹ còn mấy cái?", "lua_chon": ["3", "17", "7"], "dap_an_dung": "3", "giai_thich": "Một chục là 10, mẹ cho 7 cái thì còn 10 - 7 = 3 cái." },
        { "id": "m34", "dang_bai": "do_dai", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Một sợi dây dài 50cm, Kem cắt đi 20cm thì sợi dây còn lại bao nhiêu cm?", "lua_chon": ["30cm", "70cm", "20cm"], "dap_an_dung": "30cm", "giai_thich": "Cắt đi nên ta trừ: 50 - 20 = 30cm con nha." },
        { "id": "m35", "dang_bai": "hinh_hoc", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Đố Kem biết trong bức ảnh có bao nhiêu hình tam giác?", "hinh_anh": "assets/geom_tri_3.svg", "lua_chon": ["1", "2", "3"], "dap_an_dung": "3", "giai_thich": "Có 2 hình tam giác nhỏ xíu nằm cạnh nhau, và 1 hình tam giác bự bọc ở ngoài cùng nữa. Tổng cộng là 3 nhé!" },
        { "id": "m36", "dang_bai": "hinh_hoc", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Kem ơi, hãy đếm xem có bao nhiêu hình tam giác màu vàng trong hình này nhé:", "hinh_anh": "assets/geom_tri_multi.svg", "lua_chon": ["3", "4", "5"], "dap_an_dung": "4", "giai_thich": "Chỉ đếm hình tam giác vàng thôi nha! Có tất cả 4 bạn tam giác vàng đang chơi trốn tìm kìa." },
        { "id": "m37", "dang_bai": "hinh_hoc", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Khó hơn nè! Hãy căng mắt ra đếm xem có bao nhiêu hình tam giác tất cả?", "hinh_anh": "assets/geom_tri_6.svg", "lua_chon": ["3", "6", "5"], "dap_an_dung": "6", "giai_thich": "Có 3 hình nhỏ, 2 hình vừa (ghép từ 2 hình mỏng lại), và 1 hình bự nhất bọc ngoài cùng. Tổng cộng là 6 hình nha bé!" },
        { "id": "m38", "dang_bai": "hinh_hoc", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Ngôi nhà xinh xắn này có một chiếc mái che. Mái nhà có phần viền ngoài màu cam là hình gì vậy Kem?", "hinh_anh": "assets/geom_house.svg", "lua_chon": ["Hình vuông", "Hình tam giác", "Hình tròn"], "dap_an_dung": "Hình tam giác", "giai_thich": "Mái nhà có 3 góc và 3 cạnh nên đó là hình tam giác nhé con." },
        { "id": "m39", "dang_bai": "hinh_hoc", "kieu_tra_loi": "dien_khuyet", "cau_hoi": "Ngôi nhà này có tất cả mấy hình vuông (gợi ý: đếm thân nhà màu xanh và ô cửa sổ)?", "hinh_anh": "assets/geom_house.svg", "lua_chon": [], "dap_an_dung": "2", "giai_thich": "Phần thân nhà là 1 hình vuông lớn, và cái cửa sổ là 1 hình vuông nhỏ. Vậy có 2 hình vuông nha." },
        { "id": "m40", "dang_bai": "loi_van", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Mẹ đi chợ mua cá hết 40 nghìn, mua rau hết 15 nghìn. Hỏi mẹ tiêu hết bao nhiêu tiền?", "lua_chon": ["55", "45", "65"], "dap_an_dung": "55", "giai_thich": "Con lấy 40 + 15 = 55 nhé." },
        { "id": "m41", "dang_bai": "phep_tinh", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Phép tính nào dưới đây có kết quả là 10?", "lua_chon": ["5 + 5", "12 - 3", "4 + 7"], "dap_an_dung": "5 + 5", "giai_thich": "Chỉ có 5 + 5 mới bằng 10, vì 12-3=9 và 4+7=11 nhé con." },
        { "id": "m42", "dang_bai": "quy_luat", "kieu_tra_loi": "dien_khuyet", "cau_hoi": "Điền số tiếp theo vào dãy: 2, 4, 6, 8, ...", "lua_chon": [], "dap_an_dung": "10", "giai_thich": "Đây là các số chẵn cách nhau 2 đơn vị, sau 8 là 10 nhé." },
        { "id": "m43", "dang_bai": "so_sanh", "kieu_tra_loi": "sap_xep", "cau_hoi": "Sắp xếp độ dài từ Ngắn đến Dài:", "lua_chon": ["15cm", "8cm", "20cm"], "dap_an_dung": ["8cm", "15cm", "20cm"], "giai_thich": "Độ dài ngắn nhất là 8cm, rồi tới 15cm và dài nhất là 20cm." },
        { "id": "m44", "dang_bai": "tu_duy", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Có 10 con chim trên cành, người thợ bắn súng 'đoàng'. Hỏi còn mây con chim trên cành?", "lua_chon": ["0 con", "10 con", "9 con"], "dap_an_dung": "0 con", "giai_thich": "Tiếng súng nổ làm chim sợ bay đi hết, nên không còn con nào tren cành cả (0 con)." },
        { "id": "m45", "dang_bai": "thoi_gian", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Kim dài và kim ngắn cùng chỉ vào số 12. Vậy là mấy giờ?", "lua_chon": ["12 giờ", "6 rưỡi", "1 giờ"], "dap_an_dung": "12 giờ", "giai_thich": "Cả hai kim chập vào số 12 thẳng đứng, tức là 12 giờ chẵn!" },
        { "id": "m46", "dang_bai": "cau_tao_so", "kieu_tra_loi": "dien_khuyet", "cau_hoi": "Số lớn nhất có 2 chữ số khác nhau là số mấy?", "lua_chon": [], "dap_an_dung": "98", "giai_thich": "Số 99 là lớn nhất có 2 chữ số giống nhau, số liền trước nó là 98 có chữ số 9 và 8 khác nhau nha." },
        { "id": "m47", "dang_bai": "phep_tinh", "kieu_tra_loi": "sap_xep", "cau_hoi": "Sắp xếp để tạo ra phép tính ĐÚNG:", "lua_chon": ["7", "=", "4", "+", "3"], "dap_an_dung": ["3", "+", "4", "=", "7"], "giai_thich": "Ba cộng bốn bằng bảy, hoặc 4 + 3 = 7 đều được!" },
        { "id": "m48", "dang_bai": "do_dai", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Gang tay của Kem dài khoảng bao nhiêu?", "lua_chon": ["15 cm", "1 m", "10 m"], "dap_an_dung": "15 cm", "giai_thich": "Gang tay bé xíu chỉ khoảng mười mấy xăng-ti-mét thôi, 1m là bằng bé cao rồi (quá dài)!" }
    ],

    vietnameseQuestions: [
        { "id": "vn_01", "dang_bai": "chinh_ta", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Con hãy chọn chữ thích hợp điền vào chỗ trống: Học ... bài", "lua_chon": ["thuộc", "thược", "thuột"], "dap_an_dung": "thuộc", "giai_thich": "Từ đúng phải là 'học thuộc' con nhé." },
        { "id": "vn_02", "dang_bai": "cau_tu", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Đâu là tên một loại hoa đẹp?", "lua_chon": ["Hoa hồng", "Cái ghế", "Quyển vở"], "dap_an_dung": "Hoa hồng", "giai_thich": "Hoa hồng là tên một loài hoa đấy con." },
        { "id": "vn_03", "dang_bai": "cau_tu", "kieu_tra_loi": "sap_xep", "cau_hoi": "Con hãy chạm vào các từ để ghép thành câu đúng nhé!", "lua_chon": ["học", "bé", "Toán"], "dap_an_dung": ["bé", "học", "Toán"], "giai_thich": "Câu đúng sẽ là: Bé học Toán." },
        { "id": "vn_04", "dang_bai": "chinh_ta", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Con điền chữ c hay k vào chỗ trống: ...uốn sách", "lua_chon": ["c", "k", "ch"], "dap_an_dung": "c", "giai_thich": "Chữ 'u' đi với chữ 'c', nên tạo thành từ 'cuốn sách' con nhé." },
        { "id": "vn_05", "dang_bai": "chinh_ta", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Con cá ... (Gợi ý: cá lóc hay cá nóc)", "lua_chon": ["lóc", "nóc", "róc"], "dap_an_dung": "lóc", "giai_thich": "Tên loại cá này là cá 'lóc', viết bằng âm 'l' nhé." },
        { "id": "vn_06", "dang_bai": "cau_tu", "kieu_tra_loi": "sap_xep", "cau_hoi": "Sắp xếp thành câu đúng:", "lua_chon": ["chăm", "Kem", "học", "rất"], "dap_an_dung": ["Kem", "rất", "chăm", "học"], "giai_thich": "Câu hoàn chỉnh: Kem rất chăm học." },
        { "id": "vn_07", "dang_bai": "chinh_ta", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Chọn từ đúng chính tả: Con ...iên bay trên trời", "lua_chon": ["d", "gi", "r"], "dap_an_dung": "d", "giai_thich": "Con diều viết bằng âm 'd' nhé." },
        { "id": "vn_08", "dang_bai": "chinh_ta", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Điền vào chỗ trống: Mẹ mua cho con một ... bút chì", "lua_chon": ["cái", "con", "chiếc"], "dap_an_dung": "chiếc", "giai_thich": "Ta dùng 'một chiếc bút chì' hoặc 'một cái bút chì' đều đúng, nhưng 'chiếc' hay dùng hơn." },
        { "id": "vn_09", "dang_bai": "cau_tu", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Từ nào chỉ đồ vật trong lớp học?", "lua_chon": ["Bảng đen", "Con mèo", "Cây xoài"], "dap_an_dung": "Bảng đen", "giai_thich": "Bảng đen là đồ vật trong lớp học con nhé." },
        { "id": "vn_10", "dang_bai": "cau_tu", "kieu_tra_loi": "sap_xep", "cau_hoi": "Ghép thành câu đúng:", "lua_chon": ["xinh", "rất", "Mẹ", "đẹp"], "dap_an_dung": ["Mẹ", "rất", "xinh", "đẹp"], "giai_thich": "Câu hoàn chỉnh: Mẹ rất xinh đẹp." },
        { "id": "vn_11", "dang_bai": "chinh_ta", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Chọn từ viết đúng chính tả:", "lua_chon": ["con trâu", "con trâo", "con châu"], "dap_an_dung": "con trâu", "giai_thich": "Viết đúng là 'con trâu' con nhé." },
        { "id": "vn_12", "dang_bai": "chinh_ta", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Chọn từ đúng: Buổi sáng, ông mặt ... lên rất đẹp", "lua_chon": ["trời", "trơi", "chời"], "dap_an_dung": "trời", "giai_thich": "Ông mặt trời — viết 'trời' với dấu huyền con nhé." },
        { "id": "vn_13", "dang_bai": "cau_tu", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Từ nào chỉ con vật sống dưới nước?", "lua_chon": ["Con cá", "Con gà", "Con chim"], "dap_an_dung": "Con cá", "giai_thich": "Con cá sống dưới nước đó con." },
        { "id": "vn_14", "dang_bai": "cau_tu", "kieu_tra_loi": "sap_xep", "cau_hoi": "Sắp xếp thành câu:", "lua_chon": ["đi", "Kem", "trường", "đến"], "dap_an_dung": ["Kem", "đi", "đến", "trường"], "giai_thich": "Câu đúng: Kem đi đến trường." },
        { "id": "vn_15", "dang_bai": "chinh_ta", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Điền l hay n: ...à xanh rất mát", "lua_chon": ["l", "n"], "dap_an_dung": "l", "giai_thich": "Viết đúng là 'lá xanh' — dùng âm 'l' con nhé." },
        { "id": "vn_16", "dang_bai": "cau_tu", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Câu nào đúng chính tả?", "lua_chon": ["Em yêu mẹ", "Em iu mẹ", "Em dêu mẹ"], "dap_an_dung": "Em yêu mẹ", "giai_thich": "Viết đúng là 'yêu' con nhé." },
        { "id": "vn_17", "dang_bai": "chinh_ta", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Điền âm tr hay ch: Mẹ mua cho bé đôi ...âu báu.", "lua_chon": ["ch", "tr"], "dap_an_dung": "ch", "giai_thich": "Viết đúng là 'châu báu' con nhé." },
        { "id": "vn_18", "dang_bai": "cau_tu", "kieu_tra_loi": "sap_xep", "cau_hoi": "Xếp cho thành câu đúng:", "lua_chon": ["sáng", "Mặt", "tỏa", "trời"], "dap_an_dung": ["Mặt", "trời", "tỏa", "sáng"], "giai_thich": "Câu đúng: Mặt trời tỏa sáng." },
        { "id": "vn_19", "dang_bai": "cau_tu", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Từ nào chỉ màu sắc của lá cây mùa xuân?", "lua_chon": ["Màu xanh", "Màu trắng", "Màu đen"], "dap_an_dung": "Màu xanh", "giai_thich": "Lá cây màu xanh tươi tắn đấy con." },
        { "id": "vn_20", "dang_bai": "chinh_ta", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Đâu là từ viết ĐÚNG chính tả?", "lua_chon": ["Gia đình", "Da đình", "Ra đình"], "dap_an_dung": "Gia đình", "giai_thich": "Chữ 'Gia đình' viết bằng âm Gi con nhé." },
        { "id": "vn_21", "dang_bai": "cau_tu", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Ăn quả nhớ kẻ trồng ...", "lua_chon": ["cây", "hoa", "chuối"], "dap_an_dung": "cây", "giai_thich": "Câu tục ngữ là 'Ăn quả nhớ kẻ trồng cây' khuyên chúng ta phải biết ơn." },
        { "id": "vn_22", "dang_bai": "cau_tu", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Từ nào TRÁI NGHĨA với từ 'To lớn'?", "lua_chon": ["Bé nhỏ", "Khổng lồ", "Cao vút"], "dap_an_dung": "Bé nhỏ", "giai_thich": "Trái nghĩa với To lớn là Bé nhỏ (hoặc Nhỏ xíu) con nha." },
        { "id": "vn_23", "dang_bai": "cau_tu", "kieu_tra_loi": "sap_xep", "cau_hoi": "Sắp xếp đoạn thơ quen thuộc:", "lua_chon": ["Ai", "chăm", "Kem", "bảo"], "dap_an_dung": ["Ai", "bảo", "Kem", "chăm"], "giai_thich": "Hoặc là 'Kem rất chăm' hihi!" },
        { "id": "vn_24", "dang_bai": "chinh_ta", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Chữ Mẹ và chữ Ba, chữ nào có dấu nặng?", "lua_chon": ["Chữ Mẹ", "Chữ Ba", "Đều không có"], "dap_an_dung": "Chữ Mẹ", "giai_thich": "Đúng rồi! Chữ 'Mẹ' có dấu nặng ở bên dưới chữ e nè." },
        { "id": "vn_25", "dang_bai": "cau_tu", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Món đồ nào dùng để đội lên đầu khi ra nắng?", "lua_chon": ["Cái mũ", "Cái ô", "Cả hai đúng"], "dap_an_dung": "Cả hai đúng", "giai_thich": "Trời nắng mình có thể đội mũ hoặc che ô đều để che đầu nhé." },
        { "id": "vn_26", "dang_bai": "chinh_ta", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Chọn từ đúng: Buổi tối, ...ăng sáng vằng vặc trên cao", "lua_chon": ["tr", "ch"], "dap_an_dung": "tr", "giai_thich": "Viết đúng là 'trăng sáng', dùng âm 'tr'." }
    ],

    englishQuestions: [
        { "id": "en_01", "dang_bai": "colors", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "What color is a red apple? (Quả táo màu gì?)", "lua_chon": ["Red", "Green", "Blue"], "dap_an_dung": "Red", "giai_thich": "Red nghĩa là màu đỏ con nhé." },
        { "id": "en_02", "dang_bai": "animals", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "What animal says 'Meow'? (Con gì kêu Meow?)", "lua_chon": ["Dog", "Cat", "Bird"], "dap_an_dung": "Cat", "giai_thich": "Con mèo tiếng Anh gọi là 'Cat' nhé." },
        { "id": "en_03", "dang_bai": "colors", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Elsa's dress is usually... (Váy Elsa màu gì?)", "lua_chon": ["Blue", "Pink", "Yellow"], "dap_an_dung": "Blue", "giai_thich": "Màu xanh dương là màu của băng giá, tiếng Anh là Blue." },
        { "id": "en_04", "dang_bai": "animals", "kieu_tra_loi": "sap_xep", "cau_hoi": "Sắp xếp để tạo thành câu đúng: 'Đó là một chú bò.'", "lua_chon": ["is", "a", "It", "cow."], "dap_an_dung": ["It", "is", "a", "cow."], "giai_thich": "Cấu trúc đúng là: It is a cow." },
        { "id": "en_05", "dang_bai": "colors", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "The sun is... (Ông mặt trời màu gì?)", "lua_chon": ["Yellow", "Black", "Purple"], "dap_an_dung": "Yellow", "giai_thich": "Yellow là màu Vàng đó con." },
        { "id": "en_06", "dang_bai": "animals", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Con lợn trong tiếng Anh là gì?", "lua_chon": ["pig", "dog", "cat"], "dap_an_dung": "pig", "giai_thich": "Con lợn là 'pig' nhé." },
        { "id": "en_07", "dang_bai": "colors", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "What color is grass? (Cỏ màu gì?)", "lua_chon": ["Green", "Red", "White"], "dap_an_dung": "Green", "giai_thich": "Green là màu xanh lá cây, giống màu cỏ đó con." },
        { "id": "en_08", "dang_bai": "animals", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "What animal has a long neck? (Con gì có cổ dài?)", "lua_chon": ["Giraffe", "Dog", "Fish"], "dap_an_dung": "Giraffe", "giai_thich": "Giraffe là hươu cao cổ, cổ rất dài luôn đó con!" },
        { "id": "en_09", "dang_bai": "colors", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "What color is the sky? (Bầu trời màu gì?)", "lua_chon": ["Blue", "Orange", "Pink"], "dap_an_dung": "Blue", "giai_thich": "Blue là màu xanh dương, giống bầu trời." },
        { "id": "en_10", "dang_bai": "animals", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "What animal says 'Moo'? (Con gì kêu Moo?)", "lua_chon": ["Cow", "Sheep", "Chicken"], "dap_an_dung": "Cow", "giai_thich": "Cow là con bò, kêu 'Moo' đó con." },
        { "id": "en_11", "dang_bai": "animals", "kieu_tra_loi": "sap_xep", "cau_hoi": "Sắp xếp thành câu: 'Con mèo rất dễ thương'", "lua_chon": ["cute.", "The", "is", "cat"], "dap_an_dung": ["The", "cat", "is", "cute."], "giai_thich": "Câu đúng: The cat is cute." },
        { "id": "en_12", "dang_bai": "colors", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "What color is a banana? (Quả chuối màu gì?)", "lua_chon": ["Yellow", "Blue", "Green"], "dap_an_dung": "Yellow", "giai_thich": "Quả chuối chín có màu Yellow (vàng) con nhé." },
        { "id": "en_13", "dang_bai": "animals", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "What is a baby dog called? (Con chó con gọi là gì?)", "lua_chon": ["Puppy", "Kitten", "Cub"], "dap_an_dung": "Puppy", "giai_thich": "Chó con tiếng Anh là 'Puppy' đó con." },
        { "id": "en_14", "dang_bai": "colors", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "What color is snow? (Tuyết màu gì?)", "lua_chon": ["White", "Blue", "Gray"], "dap_an_dung": "White", "giai_thich": "Tuyết màu trắng — White đó con, giống như váy Elsa!" },
        { "id": "en_15", "dang_bai": "animals", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "What animal lives in the sea? (Con gì sống trong biển?)", "lua_chon": ["Fish", "Bird", "Monkey"], "dap_an_dung": "Fish", "giai_thich": "Fish là cá, sống trong biển đó con." },
        { "id": "en_16", "dang_bai": "animals", "kieu_tra_loi": "sap_xep", "cau_hoi": "Sắp xếp: 'Tôi thích chó'", "lua_chon": ["dogs.", "like", "I"], "dap_an_dung": ["I", "like", "dogs."], "giai_thich": "Câu đúng: I like dogs." },
        { "id": "en_17", "dang_bai": "animals", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Con gà trống gáy Ò ó o, tiếng Anh gọi con gà là gì?", "lua_chon": ["Chicken", "Duck", "Lion"], "dap_an_dung": "Chicken", "giai_thich": "Chicken là con gà con nhé!" },
        { "id": "en_18", "dang_bai": "colors", "kieu_tra_loi": "sap_xep", "cau_hoi": "Sắp xếp: 'Một quả táo đỏ'", "lua_chon": ["apple", "A", "red"], "dap_an_dung": ["A", "red", "apple"], "giai_thich": "Màu sắc đứng trước đồ vật: A red apple." },
        { "id": "en_19", "dang_bai": "colors", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Quả cam tiếng Anh là Orange. Vậy màu cam tiếng Anh là gì?", "lua_chon": ["Orange", "Yellow", "Brown"], "dap_an_dung": "Orange", "giai_thich": "Từ 'Orange' vừa có nghĩa là quả cam, vừa có nghĩa là màu cam luôn mẹo quá phải không!" },
        { "id": "en_20", "dang_bai": "animals", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "What animal loves bananas? (Con vật nào rất thích ăn chuối?)", "lua_chon": ["Monkey", "Tiger", "Snake"], "dap_an_dung": "Monkey", "giai_thich": "Khỉ (Monkey) là loài vật rất thích ăn chuối!" },
        { "id": "en_21", "dang_bai": "animals", "kieu_tra_loi": "dien_khuyet", "cau_hoi": "Con cá tiếng Anh viết là gì?", "lua_chon": [], "dap_an_dung": "fish", "giai_thich": "Biển xanh đầy cá, cá tiếng Anh là fish, f-i-s-h nè!" },
        { "id": "en_22", "dang_bai": "family", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Mẹ của con tiếng Anh gọi là gì?", "lua_chon": ["Mother", "Father", "Brother"], "dap_an_dung": "Mother", "giai_thich": "Mẹ là Mother, hoặc Mom cũng được nha." },
        { "id": "en_23", "dang_bai": "family", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Father có nghĩa là ai trong gia đình?", "lua_chon": ["Bố", "Ông nội", "Em trai"], "dap_an_dung": "Bố", "giai_thich": "Father (Dad) là Bố, người anh hùng của Kem!" },
        { "id": "en_24", "dang_bai": "colors", "kieu_tra_loi": "trac_nghiem", "cau_hoi": "Đêm tối thường hay có màu gì bọc lấy vạn vật?", "lua_chon": ["Black", "White", "Pink"], "dap_an_dung": "Black", "giai_thich": "Black là màu đen, màn đêm tăm tối nhưng rất yên bình." },
        { "id": "en_25", "dang_bai": "animals", "kieu_tra_loi": "sap_xep", "cau_hoi": "Sắp xếp: 'Đây là con gấu'", "lua_chon": ["a", "is", "This", "bear."], "dap_an_dung": ["This", "is", "a", "bear."], "giai_thich": "Câu hoàn thiện là: This is a bear." },
        { "id": "en_26", "dang_bai": "family", "kieu_tra_loi": "dien_khuyet", "cau_hoi": "Người sinh ra mẹ thì con gọi là bà. Bà (ngoại/nội) tiếng Anh là gì?", "lua_chon": [], "dap_an_dung": "grandmother", "giai_thich": "Bà là Grand-mother, chữ Grand ghếp với chữ Mother là ra!" }
    ],

    state: {
        screen: 'home',
        stickers: JSON.parse(localStorage.getItem('kem_stickers')) || [],
        currentQuestion: null,
        currentSequence: [],
        score: parseInt(localStorage.getItem('kem_score')) || 0,
        usedQuestions: JSON.parse(localStorage.getItem('kem_usedQuestions')) || [],
        fishCoins: parseInt(localStorage.getItem('kem_fishCoins')) || 0,
        petLevel: parseInt(localStorage.getItem('kem_petLevel')) || 1,
        petExp: parseInt(localStorage.getItem('kem_petExp')) || 0,
        petSpeciesIndex: parseInt(localStorage.getItem('kem_petSpeciesIndex')) || 0,
        petSpeciesList: [
            { id: 'cat', name: 'Mèo', food: 'cá', icon: 'fish_food.png' },
            { id: 'pinky_horse', name: 'Ngựa Pinky', food: 'táo', icon: 'apple_food.png' },
            { id: 'elsa', name: 'Elsa', food: 'bụi phép', icon: 'magic_food.png' },
            { id: 'dog', name: 'Cún', food: 'xương', icon: 'bone_food.png' },
            { id: 'bear', name: 'Gấu', food: 'mật ong', icon: 'honey_food.png' },
            { id: 'horse', name: 'Ngựa', food: 'cỏ', icon: 'grass_food.png' }
        ]
    },

    sounds: {
        click: new Audio('https://cdnjs.cloudflare.com/ajax/libs/ion-sound/3.0.7/sounds/button_tiny.mp3'),
        success: new Audio('https://cdnjs.cloudflare.com/ajax/libs/ion-sound/3.0.7/sounds/bell_ring.mp3'),
        error: new Audio('https://cdnjs.cloudflare.com/ajax/libs/ion-sound/3.0.7/sounds/computer_error.mp3'),
        award: new Audio('https://cdnjs.cloudflare.com/ajax/libs/ion-sound/3.0.7/sounds/glass.mp3')
    },

    bgPlaylist: [
        'assets/bai_hoc_dau_tien.mp3',
        'assets/ngay_dau_tien_di_hoc.mp3',
        'assets/mua_xuan_tren_hcm.mp3',
        'assets/me_oi_co_biet.mp3',
        'assets/bgmusic.ogg'
    ],
    bgMusic: new Audio('assets/bai_hoc_dau_tien.mp3'),
    isMusicPlaying: false,
    shouldBePlaying: false,

    playSound(type) {
        if (this.sounds[type]) {
            this.sounds[type].currentTime = 0;
            this.sounds[type].play().catch(e => console.log('Audio play error:', e));
        }
    },

    speak(text) {
        if ('speechSynthesis' in window) {
            // Hủy các câu đang nói dở để nói câu mới ngay lập tức
            window.speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'vi-VN';
            utterance.rate = 1.1; // Nói nhanh hơn một chút cho vui nhộn
            utterance.pitch = 1.2; // Giọng cao hơn một chút cho đáng yêu
            
            window.speechSynthesis.speak(utterance);
        }
    },

    showFeedbackCharacter(type) {
        const container = document.getElementById('feedback-character-container');
        const img = document.getElementById('feedback-character');
        
        // Xoá timer cũ để tránh xung đột khi bé trả lời nhanh liên tiếp
        if (this.feedbackTimer) clearTimeout(this.feedbackTimer);
        
        // Ngẫu nhiên chọn Elsa hoặc Kitty
        const character = Math.random() > 0.5 ? 'assets/elsa-icon.png' : 'assets/kitty-icon.png';
        img.src = character;
        
        container.classList.remove('hidden', 'animate-dance', 'animate-pop');
        // Force reflow để animation restart
        void container.offsetWidth;
        container.classList.add('animate-pop');
        
        if (type === 'success') {
            setTimeout(() => {
                container.classList.add('animate-dance');
            }, 600);
        }
        
        // Tự động ẩn sau 3 giây
        this.feedbackTimer = setTimeout(() => {
            container.classList.add('hidden');
            setTimeout(() => {
                container.classList.remove('animate-pop', 'animate-dance');
            }, 500);
        }, 3000);
    },

    getRandomQuestion(pool) {
        if (!this.state.usedQuestions) this.state.usedQuestions = [];
        let available = pool.filter(q => !this.state.usedQuestions.includes(q.id));
        if (available.length === 0) {
            // Hết câu hỏi mới -> xóa lịch sử của các câu trong pool hiện tại để vòng lại lặp mới
            const poolIds = pool.map(q => q.id);
            this.state.usedQuestions = this.state.usedQuestions.filter(id => !poolIds.includes(id));
            available = pool;
        }
        const qData = available[Math.floor(Math.random() * available.length)];
        this.state.usedQuestions.push(qData.id);
        localStorage.setItem('kem_usedQuestions', JSON.stringify(this.state.usedQuestions));
        return qData;
    },

    init() {
        lucide.createIcons();
        this.updateStickerCount();
        this.updateFishCount();
        
        // Thiết lập trạng thái ban đầu cho lịch sử trình duyệt
        if (!history.state) {
            history.replaceState({ screenId: 'home-screen' }, '', '');
        }

        this.loadHome(false);
        
        // Lắng nghe sự kiện nút Back/Forward của trình duyệt
        window.onpopstate = (event) => {
            if (event.state && event.state.screenId) {
                this.switchScreen(event.state.screenId, false);
            } else {
                this.loadHome(false);
            }
        };

        // Khởi tạo playlist nhạc nền
        this.bgPlaylistIndex = 0;
        this.bgMusic = new Audio(this.bgPlaylist[0]);
        this.bgMusic.volume = 0.3;
        this.bgMusic.addEventListener('ended', () => this.playNextTrack());
        
        // Thử tự động phát nhạc sau khi bé click lần đầu tiên vào bất cứ đâu
        const tryAutoPlayMusic = (e) => {
            if (e && e.target && e.target.closest && e.target.closest('.music-toggle')) return;
            app.forcePlayMusic();
            document.removeEventListener('click', tryAutoPlayMusic, true);
            document.removeEventListener('touchstart', tryAutoPlayMusic, true);
        };
        document.addEventListener('click', tryAutoPlayMusic, true);
        document.addEventListener('touchstart', tryAutoPlayMusic, true);
    },

    playNextTrack() {
        this.bgPlaylistIndex = (this.bgPlaylistIndex + 1) % this.bgPlaylist.length;
        this.bgMusic.src = this.bgPlaylist[this.bgPlaylistIndex];
        if (this.shouldBePlaying) {
            this.bgMusic.play().catch(e => console.log('Next track error:', e));
        }
    },

    forcePlayMusic() {
        this.shouldBePlaying = true;
        let p = this.bgMusic.play();
        if (p !== undefined) {
            p.then(() => {
                if (!this.shouldBePlaying) {
                    this.bgMusic.pause();
                } else {
                    this.isMusicPlaying = true;
                    // Đảm bảo nút play hiển thị trạng thái chuẩn
                    const btn = document.querySelector('.music-toggle');
                    if (btn) btn.classList.remove('muted');
                }
            }).catch(e => {
                console.log('Autoplay chặn', e);
            });
        }
    },

    setVolume(vol) {
        this.bgMusic.volume = vol;
    },

    forcePauseMusic() {
        this.shouldBePlaying = false;
        this.bgMusic.pause();
        this.isMusicPlaying = false;
        const btn = document.querySelector('.music-toggle');
        if (btn) btn.classList.add('muted');
    },

    toggleMusic() {
        if (this.isMusicPlaying) {
            this.forcePauseMusic();
        } else {
            this.forcePlayMusic();
        }
    },

    updateStickerCount() {
        document.getElementById('sticker-count').innerText = this.state.stickers.length;
    },

    loadHome(pushHistory = true) {
        this.switchScreen('home-screen', pushHistory);
    },

    switchScreen(screenId, pushHistory = true) {
        if (pushHistory) {
            history.pushState({ screenId: screenId }, '', '');
        }

        this.playSound('click');
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const target = document.getElementById(screenId);
        if (target) target.classList.add('active');
        
        const sidePhoto = document.querySelector('.side-photo');
        if (sidePhoto) {
            sidePhoto.style.display = (screenId === 'home-screen') ? 'block' : 'none';
        }
    },

    loadModule(module) {
        if (module === 'math') this.initMathGame();
        if (module === 'vietnamese') this.initVietnameseGame();
        if (module === 'english') this.initEnglishGame();
        if (module === 'coloring') this.initColoringGame();
        if (module === 'difference') this.initDifferenceGame();
    },

    // --- CƠ CHẾ CHUNG ---
    renderGameFrame(screenId, title, backHandler = 'app.loadHome()') {
        const screen = document.getElementById(screenId);
        screen.innerHTML = `
            <div class="header-with-back">
                <button class="btn-back" onclick="${backHandler}"><i data-lucide="arrow-left"></i> Quay lại</button>
                <h2>${title}</h2>
            </div>
            <div class="game-container">
                <div id="${screenId}-question" class="question-box"></div>
                <div id="${screenId}-input-area" class="input-area"></div>
                <div id="${screenId}-feedback" class="feedback-msg"></div>
            </div>
        `;
        lucide.createIcons();
    },

    displayQuestion(screenId, qData) {
        const questionEl = document.getElementById(`${screenId}-question`);
        questionEl.innerHTML = qData.cau_hoi;
        if (qData.hinh_anh) {
            questionEl.innerHTML += `<div style="text-align: center; margin-top: 15px;"><img src="${qData.hinh_anh}" alt="Hình bài tập" style="max-height: 180px; border-radius: 12px; max-width: 100%;"></div>`;
        }
        document.getElementById(`${screenId}-feedback`).innerText = '';
        this.state.currentSequence = [];
        this.state.currentFilter = this.state.currentFilter || 'all';
        
        const inputArea = document.getElementById(`${screenId}-input-area`);
        inputArea.innerHTML = '';

        if (qData.kieu_tra_loi === 'trac_nghiem') {
            const grid = document.createElement('div');
            grid.className = 'options-grid';
            qData.lua_chon.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'btn-option';
                btn.innerText = opt;
                btn.onclick = () => this.checkAnswer(opt);
                grid.appendChild(btn);
            });
            inputArea.appendChild(grid);
        } else if (qData.kieu_tra_loi === 'dien_khuyet') {
            const container = document.createElement('div');
            container.className = 'fill-container';
            container.innerHTML = `
                <input type="text" id="fill-input" placeholder="Nhập đáp số..." autofocus>
                <button class="btn-submit" onclick="app.checkAnswer(document.getElementById('fill-input').value)">Nộp bài</button>
            `;
            inputArea.appendChild(container);
        } else if (qData.kieu_tra_loi === 'sap_xep') {
            const container = document.createElement('div');
            container.className = 'bubble-container';
            qData.lua_chon.forEach(val => {
                const bubble = document.createElement('div');
                bubble.className = 'bubble-item';
                bubble.innerText = val;
                bubble.onclick = () => this.handleSequenceClick(bubble, val);
                container.appendChild(bubble);
            });
            inputArea.appendChild(container);
        }
    },

    checkAnswer(val) {
        const correct = this.state.currentQuestion.dap_an_dung.toString().toLowerCase().trim();
        const userVal = val.toString().toLowerCase().trim();

        if (userVal === correct) {
            this.playSound('success');
            this.handleSuccess();
            setTimeout(() => this.nextQuestion(), 1500);
        } else {
            this.playSound('error');
            this.handleFailure();
        }
    },

    handleSequenceClick(el, val) {
        const targetOrder = this.state.currentQuestion.dap_an_dung;
        const nextTarget = targetOrder[this.state.currentSequence.length];

        if (val === nextTarget) {
            this.playSound('click');
            this.state.currentSequence.push(val);
            el.classList.add('selected');
            el.style.transform = 'scale(0) rotate(20deg)';
            el.style.opacity = '0';
            
            if (this.state.currentSequence.length === targetOrder.length) {
                this.playSound('success');
                this.handleSuccess();
                setTimeout(() => this.nextQuestion(), 1500);
            }
        } else {
            this.playSound('error');
            el.classList.add('shake');
            setTimeout(() => el.classList.remove('shake'), 500);
            const feedback = document.querySelector('.screen.active .feedback-msg');
            feedback.innerText = "Ơ kìa, chưa đúng thứ tự rồi Kem ơi!";
            feedback.style.color = "#fa5252";
        }
    },

    nextQuestion() {
        if (document.getElementById('math-screen').classList.contains('active')) this.generateMathQuestion(this.state.currentFilter);
        else if (document.getElementById('vietnamese-screen').classList.contains('active')) this.generateVietnameseQuestion(this.state.currentFilter);
        else if (document.getElementById('english-screen').classList.contains('active')) this.generateEnglishQuestion(this.state.currentFilter);
    },

    handleSuccess() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#a5d8ff', '#ffdeeb', '#ffffff']
        });

        const feedback = document.querySelector('.screen.active .feedback-msg');
        const successMsgs = [
            "Kem giỏi quá! ✨",
            "Tuyệt vời quá công chúa ơi! 👑",
            "Đúng rồi! Bé Kem thông minh quá! 🌟",
            "Xuất sắc! Tiếp tục nào con! 🍭"
        ];
        const randomMsg = successMsgs[Math.floor(Math.random() * successMsgs.length)];
        
        feedback.innerText = randomMsg;
        feedback.style.color = "#40c057";

        this.speak(randomMsg);
        this.showFeedbackCharacter('success');

        this.state.score++;
        localStorage.setItem('kem_score', this.state.score.toString());
        
        // Cộng cá
        this.state.fishCoins++;
        localStorage.setItem('kem_fishCoins', this.state.fishCoins.toString());
        this.updateFishCount();

        if (this.state.score % 3 === 0) {
            this.awardSticker();
        }
    },

    handleFailure() {
        const feedback = document.querySelector('.screen.active .feedback-msg');
        const errorMsgs = [
            "Tiếc quá, chưa đúng rồi!",
            "Cố lên Kem ơi, sắp đúng rồi!",
            "Thử lại lần nữa nhé công chúa!",
            "Ơ kìa, xem kĩ lại một chút nhé!"
        ];
        const randomMsg = errorMsgs[Math.floor(Math.random() * errorMsgs.length)];

        feedback.innerHTML = `<span style="color: #fa5252">${randomMsg}</span><br><small>${this.state.currentQuestion.giai_thich}</small>`;
        
        this.speak(randomMsg);
        this.showFeedbackCharacter('failure');
    },

    awardSticker() {
        this.playSound('award');
        const stickersIcons = ['🌈', '🍦', '🧁', '🦄', '🌸', '❄️', '🧚', '🐱', '👑', '🎀'];
        const randomIcon = stickersIcons[Math.floor(Math.random() * stickersIcons.length)];
        const newSticker = { id: Date.now(), icon: randomIcon, date: new Date().toLocaleDateString() };
        this.state.stickers.push(newSticker);
        localStorage.setItem('kem_stickers', JSON.stringify(this.state.stickers));
        this.updateStickerCount();
        this.showStickerToast(randomIcon);
    },

    showStickerToast(icon) {
        // Xoá toast cũ nếu có
        const old = document.getElementById('sticker-toast');
        if (old) old.remove();

        const toast = document.createElement('div');
        toast.id = 'sticker-toast';
        toast.innerHTML = `
            <div class="toast-icon">${icon}</div>
            <div class="toast-text">
                <strong>Chúc mừng Kem!</strong>
                <span>Con nhận được 1 sticker mới!</span>
            </div>
        `;
        document.body.appendChild(toast);

        // Confetti nhỏ cho sticker
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.3 }, colors: ['#ffd43b', '#ff6b9d', '#a5d8ff'] });

        // Tự động ẩn sau 3 giây
        setTimeout(() => {
            toast.classList.add('toast-hide');
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    },

    showStickers() {
        this.switchScreen('sticker-screen');
        const grid = document.getElementById('sticker-grid');
        grid.innerHTML = '';
        for (let i = 0; i < 12; i++) {
            const sticker = this.state.stickers[i];
            const div = document.createElement('div');
            div.className = `sticker-item ${sticker ? 'earned' : ''}`;
            div.innerText = sticker ? sticker.icon : '?';
            grid.appendChild(div);
        }
    },

    // --- MODULE TOÁN ---
    initMathGame() {
        this.switchScreen('math-menu-screen');
    },

    startMathGame(filter) {
        this.state.currentFilter = filter;
        this.switchScreen('math-screen');
        this.renderGameFrame('math-screen', 'Toán học vui vẻ', 'app.initMathGame()');
        this.generateMathQuestion(filter);
    },

    generateMathQuestion(filter = 'all') {
        let pool = this.mathQuestions;
        if (filter !== 'all') {
            pool = this.mathQuestions.filter(q => q.dang_bai === filter || q.kieu_tra_loi === filter);
        }
        const qData = this.getRandomQuestion(pool);
        this.state.currentQuestion = qData;
        this.displayQuestion('math-screen', qData);
    },

    // --- MODULE TIẾNG VIỆT ---
    initVietnameseGame() {
        this.switchScreen('vietnamese-menu-screen');
    },

    startVietnameseGame(filter) {
        this.state.currentFilter = filter;
        this.switchScreen('vietnamese-screen');
        this.renderGameFrame('vietnamese-screen', 'Giải đố Tiếng Việt', 'app.initVietnameseGame()');
        this.generateVietnameseQuestion(filter);
    },

    generateVietnameseQuestion(filter = 'all') {
        let pool = this.vietnameseQuestions;
        if (filter !== 'all') {
            pool = this.vietnameseQuestions.filter(q => q.dang_bai === filter);
        }
        const qData = this.getRandomQuestion(pool);
        this.state.currentQuestion = qData;
        this.displayQuestion('vietnamese-screen', qData);
    },

    // --- MODULE TIẾNG ANH ---
    initEnglishGame() {
        this.switchScreen('english-menu-screen');
    },

    startEnglishGame(filter) {
        this.state.currentFilter = filter;
        this.switchScreen('english-screen');
        this.renderGameFrame('english-screen', 'English is Fun!', 'app.initEnglishGame()');
        this.generateEnglishQuestion(filter);
    },

    generateEnglishQuestion(filter = 'all') {
        let pool = this.englishQuestions;
        if (filter !== 'all') {
            pool = this.englishQuestions.filter(q => q.dang_bai === filter);
        }
        const qData = this.getRandomQuestion(pool);
        this.state.currentQuestion = qData;
        this.displayQuestion('english-screen', qData);
    },

    // --- MODULE TÔ MÀU (HOẠ SĨ NHÍ) ---
    initColoringGame() {
        this.switchScreen('coloring-screen');
        this.state.currentColor = '#f06595'; // Mặc định màu hồng
        this.state.isEraser = false;
        
        const paletteEl = document.getElementById('color-palette');
        const canvas = document.getElementById('coloring-canvas');
        const ctx = canvas.getContext('2d');
        
        // Thiết lập kích thước thực cho canvas bằng với container
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.lineWidth = 15; // Cọ to cho bé dễ tô
        
        // Khởi tạo bảng màu
        const colors = [
            '#ff8787', '#f06595', '#da77f2', '#9775fa', '#74c0fc',
            '#4dabf7', '#3bc9db', '#69db7c', '#a9e34b', '#ffd43b',
            '#ffa94d', '#212529'
        ];
        
        paletteEl.innerHTML = '';
        colors.forEach(c => {
            const swatch = document.createElement('div');
            swatch.className = 'color-swatch';
            swatch.style.backgroundColor = c;
            if (c === this.state.currentColor) swatch.classList.add('active');
            
            const handleSelect = (e) => {
                e.preventDefault();
                this.playSound('click');
                this.state.currentColor = c;
                this.state.isEraser = false;
                document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
                document.getElementById('btn-eraser').classList.remove('active');
                swatch.classList.add('active');
            };
            swatch.addEventListener('touchstart', handleSelect, { passive: false });
            swatch.addEventListener('click', handleSelect);
            
            paletteEl.appendChild(swatch);
        });

        // Xử lý các nút công cụ
        const btnEraser = document.getElementById('btn-eraser');
        const btnClear = document.getElementById('btn-clear');
        
        const toggleEraser = (e) => {
            e.preventDefault();
            this.playSound('click');
            this.state.isEraser = true;
            document.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
            btnEraser.classList.add('active');
        };
        btnEraser.addEventListener('click', toggleEraser);
        btnEraser.addEventListener('touchstart', toggleEraser, { passive: false });

        const clearCanvas = (e) => {
            e.preventDefault();
            this.playSound('click');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };
        btnClear.addEventListener('click', clearCanvas);
        btnClear.addEventListener('touchstart', clearCanvas, { passive: false });

        // LOGIC VẼ CANVAS (Di tay / Chuột)
        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        const startDrawing = (e) => {
            e.preventDefault();
            isDrawing = true;
            const pos = getPos(e);
            lastX = pos.x; lastY = pos.y;
        };

        const draw = (e) => {
            if (!isDrawing) return;
            e.preventDefault();
            const pos = getPos(e);
            
            ctx.globalCompositeOperation = this.state.isEraser ? 'destination-out' : 'source-over';
            ctx.strokeStyle = this.state.isEraser ? 'rgba(0,0,0,1)' : this.state.currentColor;
            ctx.lineWidth = this.state.isEraser ? 30 : 15; // Tẩy to hơn cọ
            
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            
            lastX = pos.x; lastY = pos.y;
        };

        const stopDrawing = (e) => {
            e.preventDefault();
            isDrawing = false;
        };

        const getPos = (e) => {
            const rect = canvas.getBoundingClientRect();
            // Lấy tọa độ Touch hoặc Mouse
            const clientX = e.touches && e.touches.length > 0 ? e.touches[0].clientX : (e.clientX || 0);
            const clientY = e.touches && e.touches.length > 0 ? e.touches[0].clientY : (e.clientY || 0);
            return {
                x: clientX - rect.left,
                y: clientY - rect.top
            };
        };

        // Gắn sự kiện (cả chuột và touch iPad)
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);

        canvas.addEventListener('touchstart', startDrawing, { passive: false });
        canvas.addEventListener('touchmove', draw, { passive: false });
        canvas.addEventListener('touchend', stopDrawing, { passive: false });
        canvas.addEventListener('touchcancel', stopDrawing, { passive: false });
        
        // Fix resize bug khi xoay màn hình ipad
        window.addEventListener('resize', () => {
            // Lưu lại data cũ
            const dataUrl = canvas.toDataURL();
            const newRect = canvas.parentElement.getBoundingClientRect();
            canvas.width = newRect.width;
            canvas.height = newRect.height;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            const img = new Image();
            img.src = dataUrl;
            img.onload = () => ctx.drawImage(img, 0, 0);
        });
    },

    changeColoringImage(imgEl) {
        this.playSound('click');
        document.querySelectorAll('.img-thumb').forEach(el => el.classList.remove('active'));
        imgEl.classList.add('active');
        document.getElementById('coloring-outline').src = imgEl.src;
        // Tự động clear màn vẽ khi đổi tranh
        const canvas = document.getElementById('coloring-canvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    },

    // 2 màn chơi thật sự bằng ảnh ghép đôi (side-by-side)
    imageDifferenceScenes: [
        { 
            name: "Thế Giới Đại Dương", 
            img: "assets/diff_puzzles/real_puzzle_1.png", 
            diffs: [{"x": 75.83, "y": 36.47, "w": 6.93, "h": 6.93}, {"x": 77.66, "y": 46.15, "w": 11.08, "h": 10.45}, {"x": 62.94, "y": 48.39, "w": 6.74, "h": 6.74}, {"x": 53.76, "y": 52.49, "w": 6.74, "h": 6.74}, {"x": 85.96, "y": 63.57, "w": 8.83, "h": 8.98}] 
        },
        { 
            name: "Vũ Trụ Không Gian", 
            img: "assets/diff_puzzles/real_puzzle_2.png", 
            diffs: [{"x": 82.27, "y": 24.0, "w": 13.38, "h": 5.32}, {"x": 80.32, "y": 30.91, "w": 3.23, "h": 4.2}, {"x": 87.25, "y": 31.93, "w": 5.17, "h": 4.49}, {"x": 54.83, "y": 44.99, "w": 16.3, "h": 16.16}, {"x": 77.13, "y": 50.39, "w": 13.14, "h": 14.65}, {"x": 77.44, "y": 59.18, "w": 8.59, "h": 1.95}, {"x": 46.92, "y": 68.38, "w": 11.23, "h": 12.93}, {"x": 57.47, "y": 83.45, "w": 9.08, "h": 9.08}] 
        }
    ],

    differenceState: {
        currentSceneIndex: 0,
        total: 5,
        found: 0,
        foundIndexes: []
    },

    initDifferenceGame() {
        this.differenceState.currentSceneIndex = parseInt(localStorage.getItem('kem_diff_level') || '0');
        this.switchScreen('difference-screen');
        this.generateDifferenceLevel();
    },

    generateDifferenceLevel() {
        const imgEl = document.getElementById('diff-main-image');
        const container = document.getElementById('diff-hotspots-container');

        const sceneIdx = this.differenceState.currentSceneIndex % this.imageDifferenceScenes.length;
        const scene = this.imageDifferenceScenes[sceneIdx];
        
        // Save current level logic to localStorage
        this.differenceState.currentSceneIndex++;
        localStorage.setItem('kem_diff_level', this.differenceState.currentSceneIndex.toString());

        // Update UI info
        const nameEl = document.getElementById('diff-scene-name');
        if (nameEl) nameEl.textContent = scene.name;

        imgEl.src = scene.img;

        this.differenceState.found = 0;
        this.differenceState.total = scene.diffs.length;
        this.differenceState.foundIndexes = [];
        
        document.getElementById('diff-found').innerText = '0';
        document.getElementById('diff-total').innerText = scene.diffs.length.toString();
        
        const fbEl = document.getElementById('diff-feedback');
        if (fbEl) fbEl.textContent = '';
        
        container.innerHTML = ''; // Làm sạch các hotspot cũ

        // Tạo hotspots cho mỗi điểm khác biệt (cả trái và phải)
        scene.diffs.forEach((diff, idx) => {
            // diff.x is relative to half-width of the image
            const leftX = diff.x / 2;
            const rightX = 50 + (diff.x / 2);
            
            // Generate Left and Right invisible hotspots
            const createHotspot = (xPercent, wrapperId) => {
                const hs = document.createElement('div');
                hs.className = 'diff-hotspot';
                hs.id = wrapperId;
                hs.style.left = `${xPercent}%`;
                hs.style.top = `${diff.y}%`;
                hs.style.width = `max(${diff.w / 2}%, 45px)`; // Minimum click target cho iPad
                hs.style.height = `max(${diff.h}%, 45px)`;
                
                hs.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.handleDifferenceClick(idx); // Truyền index chung để check một lúc cả cạp
                });
                return hs;
            };

            container.appendChild(createHotspot(leftX, `diff-item-${idx}-left`));
            container.appendChild(createHotspot(rightX, `diff-item-${idx}-right`));
        });
    },

    handleDifferenceClick(diffIdx) {
        if (this.differenceState.foundIndexes.includes(diffIdx)) return;

        this.playSound('click');
        this.differenceState.foundIndexes.push(diffIdx);
        this.differenceState.found++;
        document.getElementById('diff-found').innerText = this.differenceState.found.toString();

        const lHotspot = document.getElementById(`diff-item-${diffIdx}-left`);
        const rHotspot = document.getElementById(`diff-item-${diffIdx}-right`);

        // Tắt khả năng nhấn lại và loại bỏ nháy nháy nếu có
        [lHotspot, rHotspot].forEach(hs => {
            if (hs) {
                hs.style.pointerEvents = 'none';
                hs.classList.remove('hint-blink');

                // Vẽ khoanh tròn đỏ ngay tâm hotspot đó
                const circle = document.createElement('div');
                circle.className = 'diff-circle';
                hs.appendChild(circle);
            }
        });

        const fbEl = document.getElementById('diff-feedback');
        if (fbEl) {
            fbEl.textContent = `Tìm được ${this.differenceState.found}/${this.differenceState.total} điểm! Giỏi lắm Kem ơi! 🌟`;
            fbEl.style.color = '#40c057';
        }

        if (this.differenceState.found === this.differenceState.total) {
            setTimeout(() => {
                this.playSound('success');
                confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, colors: ['#a5d8ff', '#ffdeeb', '#ffd43b'] });
                if (fbEl) fbEl.textContent = '🎉 Xuất sắc! Phát hiện hết rồi! Chuyển cảnh thôi!';
                this.state.score++;
                
                // Cộng 5 cá vì Tinh Mắt khó hơn
                this.state.fishCoins += 5;
                localStorage.setItem('kem_fishCoins', this.state.fishCoins.toString());
                this.updateFishCount();

                if (this.state.score % 3 === 0) this.awardSticker();
                setTimeout(() => { this.generateDifferenceLevel(); }, 3000);
            }, 600);
        }
    },

    showDiffHint() {
        const sceneIdx = (this.differenceState.currentSceneIndex - 1) % this.imageDifferenceScenes.length;
        const totalItems = this.imageDifferenceScenes[sceneIdx].diffs.length;
        
        let notFound = -1;
        for (let i = 0; i < totalItems; i++) {
            if (!this.differenceState.foundIndexes.includes(i)) {
                notFound = i;
                break;
            }
        }

        if (notFound === -1) return;
        
        this.playSound('click');
        
        const target = document.getElementById(`diff-item-${notFound}-right`);
        if (target) {
            target.classList.add('hint-blink');
            setTimeout(() => target.classList.remove('hint-blink'), 2000);
        }
    },

    // ===== HỆ THỐNG LOGIC NUÔI MÈO ===== //
    updateFishCount() {
        const fc = document.getElementById('fish-count');
        if (fc) fc.innerText = this.state.fishCoins;
        const pfc = document.getElementById('pet-fish-count');
        if (pfc) pfc.innerText = this.state.fishCoins;
    },

    loadPetScreen() {
        this.switchScreen('pet-screen');
        this.randomizePetScene();
        this.updatePetUI();
    },

    randomizePetScene() {
        const scene = document.getElementById('pet-scene');
        if (scene) {
            scene.classList.remove('scene-room', 'scene-garden');
            const bgClass = Math.random() > 0.5 ? 'scene-room' : 'scene-garden';
            scene.classList.add(bgClass);
        }
    },

    loadMusicScreen() {
        this.switchScreen('music-screen');
        const container = document.getElementById('music-playlist-container');
        if (!container) return;
        container.innerHTML = '';
        
        const trackNames = [
            'Bài Học Đầu Tiên',
            'Ngày Đầu Tiên Đi Học',
            'Kho Nhạc Phương Mỹ Chi',
            'Mẹ Ơi Có Biết',
            'Nhạc Sôi Động'
        ];
        
        this.bgPlaylist.forEach((trackUrl, index) => {
            const isPlayingNode = (this.isMusicPlaying && this.bgPlaylistIndex === index) 
                ? '<div style="color:#fa5252; font-size: 0.9em; margin-top: 5px; font-weight: bold;">(Đang phát)</div>' 
                : '';
            const btn = document.createElement('button');
            btn.className = 'menu-card mini all';
            btn.innerHTML = `
                <div class="card-icon">🎧</div>
                <span style="font-size: 1.1rem; line-height: 1.3;">${trackNames[index]}</span>
                ${isPlayingNode}
            `;
            btn.onclick = () => {
                this.bgPlaylistIndex = index;
                this.bgMusic.src = this.bgPlaylist[index];
                this.playSound('click');
                this.forcePlayMusic();
                setTimeout(() => this.loadMusicScreen(), 100); 
            };
            container.appendChild(btn);
        });
    },

    getExpNeeded() {
        // Cấp 1 cần 50, Cấp 2 cần 70, Cấp 3 cần 90...
        return 50 + (this.state.petLevel - 1) * 20; 
    },

    getPetImage() {
        const species = this.state.petSpeciesList[this.state.petSpeciesIndex].id;
        let stage = 1;
        if (this.state.petLevel >= 15) stage = 4;
        else if (this.state.petLevel >= 10) stage = 3;
        else if (this.state.petLevel >= 5) stage = 2;
        
        // Trả về ảnh theo cấu trúc: assets/pet_{species}_{stage}.png
        return `assets/pet_${species}_${stage}.png`;
    },

    updatePetUI() {
        if (!document.getElementById('pet-screen').classList.contains('active')) return;

        const species = this.state.petSpeciesList[this.state.petSpeciesIndex];
        document.getElementById('pet-level-display').innerText = this.state.petLevel;
        document.getElementById('pet-exp-current').innerText = this.state.petExp;
        
        const expNeeded = this.getExpNeeded();
        document.getElementById('pet-exp-needed').innerText = expNeeded;
        
        const percent = (this.state.petExp / expNeeded) * 100;
        document.getElementById('pet-exp-fill').style.width = `${Math.min(percent, 100)}%`;
        
        // Cập nhật ảnh thú
        const petImg = document.getElementById('pet-image');
        if (petImg) petImg.src = this.getPetImage();
        
        // Cập nhật icon thức ăn trong hiệu ứng
        const foodIcon = document.getElementById('food-icon');
        if (foodIcon) foodIcon.src = `assets/${species.icon}`;
        
        // Cập nhật nút bấm
        const btn = document.getElementById('btn-feed-pet');
        if (this.state.fishCoins <= 0) {
            btn.disabled = true;
            btn.style.opacity = '0.5';
            btn.innerText = `Kiếm thêm cá để cho ${species.name} ăn nhé!`;
        } else {
            btn.disabled = false;
            btn.style.opacity = '1';
            btn.innerText = `Cho ${species.name} ăn (${species.food})`;
        }
        
        // Cập nhật tiêu đề màn hình
        const title = document.querySelector('#pet-screen h2');
        if (title) title.innerText = `Nhà của ${species.name} 🏠`;
    },

    feedPet() {
        if (this.state.fishCoins > 0) {
            const species = this.state.petSpeciesList[this.state.petSpeciesIndex];
            this.playSound('click');
            this.state.fishCoins--;
            this.state.petExp += 10;
            
            // Hiệu ứng cho ăn
            const foodAnim = document.getElementById('food-animation');
            foodAnim.classList.remove('hidden', 'animate-toss');
            void foodAnim.offsetWidth; // trigger reflow
            foodAnim.classList.add('animate-toss');
            
            setTimeout(() => {
                foodAnim.classList.add('hidden');
                const avatar = document.querySelector('.pet-avatar-wrapper');
                avatar.classList.add('happy-bounce');
                setTimeout(() => avatar.classList.remove('happy-bounce'), 800);
            }, 800);
            
            const fb = document.getElementById('pet-feedback');
            fb.innerText = `${species.name} ăn ngoan quá! Tuyệt vời! 💖`;
            fb.style.color = "#f06595";
            
            // Kiểm tra lên cấp
            if (this.state.petExp >= this.getExpNeeded()) {
                this.state.petExp -= this.getExpNeeded();
                this.state.petLevel++;
                this.playSound('award');
                
                // Bắn pháo hoa
                confetti({ 
                    particleCount: 150, spread: 80, origin: { y: 0.6 },
                    colors: ['#ffdeeb', '#f06595', '#a5d8ff']
                });
                
                // Kiểm tra tiến hóa
                if (this.state.petLevel === 5 || this.state.petLevel === 10 || this.state.petLevel === 15) {
                    fb.innerText = `CHÚC MỪNG! ${species.name} đã lớn lên rồi! ✨`;
                } else if (this.state.petLevel >= 20) {
                    // Chuyển sang loài mới
                    fb.innerText = `BÉ KEM THẬT TUYỆT! Đã nuôi thành công ${species.name}! 🎉`;
                    setTimeout(() => {
                        this.state.petLevel = 1;
                        this.state.petExp = 0;
                        this.state.petSpeciesIndex = (this.state.petSpeciesIndex + 1) % this.state.petSpeciesList.length;
                        localStorage.setItem('kem_petSpeciesIndex', this.state.petSpeciesIndex.toString());
                        this.updatePetUI();
                    }, 3000);
                } else {
                    fb.innerText = `WOW! ${species.name} đã lên cấp ${this.state.petLevel}! 🎉`;
                }
            }
            
            localStorage.setItem('kem_fishCoins', this.state.fishCoins.toString());
            localStorage.setItem('kem_petExp', this.state.petExp.toString());
            localStorage.setItem('kem_petLevel', this.state.petLevel.toString());
            
            this.updateFishCount();
            this.updatePetUI();
        }
    }
};

window.onload = () => app.init();
