import json

exams = []
for i in range(1, 11):
    exams.append({
        "id": i,
        "title": f"Đề {i}",
        "exam": "",
        "answer": ""
    })

# Đề 1
exams[0]["exam"] = """### I. Trắc nghiệm
**Câu 1.** Số gồm 6 chục và 4 đơn vị là:
A. 46   B. 64   C. 60   D. 40

**Câu 2.** Số 89 đọc là:
A. tám chín   B. tám mươi chín   C. chín mươi tám   D. tám mươi

**Câu 3.** Số lớn nhất trong các số 72, 27, 70, 79 là:
A. 72   B. 27   C. 70   D. 79

**Câu 4.** Kết quả của 35 + 20 là:
A. 37   B. 55   C. 53   D. 15

**Câu 5.** Hôm nay là thứ Ba, ngày 12 tháng 4. Ngày mai là:
A. thứ Tư, ngày 13 tháng 4   B. thứ Hai, ngày 11 tháng 4   C. thứ Ba, ngày 13 tháng 4   D. thứ Năm, ngày 14 tháng 4

**Câu 6.** Hình nào có 4 cạnh bằng nhau?
A. hình tròn   B. hình tam giác   C. hình vuông   D. hình chữ nhật

### II. Tự luận
**Câu 7.** Sắp xếp các số 48, 84, 54, 45 theo thứ tự bé đến lớn.
........................................................................

**Câu 8.** Đặt tính rồi tính:
a. 46 + 23 = ............        b. 78 - 35 = ............
c. 30 + 49 = ............        d. 96 - 40 = ............

**Câu 9.** Lan có 24 viên bi, Minh có 15 viên bi. Hỏi hai bạn có tất cả bao nhiêu viên bi?
Bài giải: ................................................................

**Câu 10.** Điền dấu >, <, = vào chỗ chấm:
a. 57 ... 75        b. 68 - 20 ... 48        c. 34 + 5 ... 40        d. 90 ... 89
"""
exams[0]["answer"] = """### I. Trắc nghiệm
1. B  
2. B  
3. D  
4. B  
5. A  
6. C  

### II. Tự luận
**Câu 7:** 45, 48, 54, 84.  

**Câu 8:**  
a. 69  
b. 43  
c. 79  
d. 56  

**Câu 9:**  
Số viên bi hai bạn có tất cả là:  
24 + 15 = 39 (viên bi)  
Đáp số: 39 viên bi.  

**Câu 10:**  
a. <  
b. =  
c. <  
d. >  
"""

# Đề 2
exams[1]["exam"] = """### I. Trắc nghiệm
**Câu 1.** Số 53 gồm:
A. 5 chục 3 đơn vị   B. 3 chục 5 đơn vị   C. 5 đơn vị 3 chục   D. 50 chục 3 đơn vị

**Câu 2.** Số liền trước của 70 là:
A. 71   B. 69   C. 60   D. 79

**Câu 3.** Kết quả của 86 - 4 là:
A. 82   B. 80   C. 46   D. 90

**Câu 4.** Các số 31, 33, 35, ... Số cần điền là:
A. 34   B. 36   C. 37   D. 38

**Câu 5.** Đồng hồ chỉ 8 giờ đúng khi:
A. kim ngắn chỉ 8, kim dài chỉ 12   B. kim ngắn chỉ 12, kim dài chỉ 8   C. kim ngắn chỉ 6, kim dài chỉ 12   D. kim ngắn chỉ 8, kim dài chỉ 6

**Câu 6.** Trong các hình: hình tròn, hình tam giác, hình vuông, hình chữ nhật, hình không có cạnh là:
A. hình tròn   B. hình tam giác   C. hình vuông   D. hình chữ nhật

### II. Tự luận
**Câu 7.** Viết các số: ba mươi bảy, sáu mươi mốt, chín mươi, năm mươi tám.
........................................................................

**Câu 8.** Tính:
a. 42 + 17 = ............        b. 95 - 52 = ............
c. 61 + 8 = .............        d. 77 - 7 = .............

**Câu 9.** Trong vườn có 36 cây hoa hồng và 20 cây hoa cúc. Hỏi trong vườn có tất cả bao nhiêu cây hoa?
Bài giải: ................................................................

**Câu 10.** Điền số thích hợp:
a. 45 = 40 + ...        b. 68 = ... + 8        c. 90 = 9 chục và ... đơn vị        d. 7 chục 2 đơn vị = ...
"""
exams[1]["answer"] = """### I. Trắc nghiệm
1. A  
2. B  
3. A  
4. C  
5. A  
6. A  

### II. Tự luận
**Câu 7:** 37, 61, 90, 58.  

**Câu 8:**  
a. 59  
b. 43  
c. 69  
d. 70  

**Câu 9:**  
Số cây hoa trong vườn có tất cả là:  
36 + 20 = 56 (cây hoa)  
Đáp số: 56 cây hoa.  

**Câu 10:**  
a. 5  
b. 60  
c. 0  
d. 72  
"""

# Đề 3
exams[2]["exam"] = """### I. Trắc nghiệm
**Câu 1.** Số 76 đọc là:
A. bảy sáu   B. bảy mươi sáu   C. sáu mươi bảy   D. bảy mươi

**Câu 2.** Số bé nhất trong các số 64, 46, 60, 69 là:
A. 64   B. 46   C. 60   D. 69

**Câu 3.** Kết quả của 40 + 30 là:
A. 43   B. 70   C. 10   D. 73

**Câu 4.** 58 - ... = 50. Số cần điền là:
A. 5   B. 8   C. 50   D. 58

**Câu 5.** Một tuần có:
A. 5 ngày   B. 6 ngày   C. 7 ngày   D. 8 ngày

**Câu 6.** Hình tam giác có:
A. 2 cạnh   B. 3 cạnh   C. 4 cạnh   D. không có cạnh

### II. Tự luận
**Câu 7.** Điền dấu >, <, =:
a. 63 ... 36        b. 70 + 5 ... 75        c. 88 - 8 ... 79        d. 40 + 20 ... 62

**Câu 8.** Đặt tính rồi tính:
a. 25 + 34 = ............        b. 89 - 27 = ............
c. 56 + 3 = .............        d. 64 - 30 = ............

**Câu 9.** Mẹ mua 45 quả cam, đã ăn 12 quả. Hỏi còn lại bao nhiêu quả cam?
Bài giải: ................................................................

**Câu 10.** Vẽ thêm vào mỗi hình cho đủ:
a. Một hình vuông có 4 cạnh.  
b. Một hình tam giác có 3 đỉnh.  
c. Một hình chữ nhật có 4 góc.
"""
exams[2]["answer"] = """### I. Trắc nghiệm
1. B  
2. B  
3. B  
4. B  
5. C  
6. B  

### II. Tự luận
**Câu 7:**  
a. >  
b. =  
c. >  
d. <  

**Câu 8:**  
a. 59  
b. 62  
c. 59  
d. 34  

**Câu 9:**  
Số quả cam còn lại là:  
45 - 12 = 33 (quả cam)  
Đáp số: 33 quả cam.  

**Câu 10:**  
Học sinh tự vẽ hình theo yêu cầu.
"""

# Đề 4
exams[3]["exam"] = """### I. Trắc nghiệm
**Câu 1.** Số gồm 9 chục và 0 đơn vị là:
A. 9   B. 90   C. 99   D. 09

**Câu 2.** Số liền sau của 58 là:
A. 57   B. 59   C. 68   D. 60

**Câu 3.** Phép tính có kết quả bằng 47 là:
A. 40 + 7   B. 47 - 7   C. 37 + 5   D. 57 - 20

**Câu 4.** 93 - 40 =:
A. 50   B. 53   C. 63   D. 97

**Câu 5.** Nếu hôm qua là thứ Năm thì hôm nay là:
A. thứ Tư   B. thứ Năm   C. thứ Sáu   D. thứ Bảy

**Câu 6.** Độ dài của bút chì thường được đo bằng:
A. cm   B. l   C. kg   D. giờ

### II. Tự luận
**Câu 7.** Sắp xếp các số 90, 19, 91, 99 theo thứ tự lớn đến bé.
........................................................................

**Câu 8.** Tính:
a. 67 - 25 = ............        b. 38 + 41 = ............
c. 80 - 30 = ............        d. 24 + 5 = .............

**Câu 9.** Lớp 1A có 32 bạn nữ và 25 bạn nam. Hỏi lớp 1A có tất cả bao nhiêu bạn?
Bài giải: ................................................................

**Câu 10.** Điền số vào chỗ chấm:
a. ... + 20 = 65        b. 78 - ... = 70        c. 30 + ... = 39        d. ... - 4 = 82
"""
exams[3]["answer"] = """### I. Trắc nghiệm
1. B  
2. B  
3. A  
4. B  
5. C  
6. A  

### II. Tự luận
**Câu 7:** 99, 91, 90, 19.  

**Câu 8:**  
a. 42  
b. 79  
c. 50  
d. 29  

**Câu 9:**  
Số bạn lớp 1A có tất cả là:  
32 + 25 = 57 (bạn)  
Đáp số: 57 bạn.  

**Câu 10:**  
a. 45  
b. 8  
c. 9  
d. 86  
"""

# Đề 5
exams[4]["exam"] = """### I. Trắc nghiệm
**Câu 1.** Số 41 gồm:
A. 4 chục 1 đơn vị   B. 1 chục 4 đơn vị   C. 4 đơn vị 1 chục   D. 41 chục

**Câu 2.** 100 là số:
A. có 1 chữ số   B. có 2 chữ số   C. có 3 chữ số   D. bé hơn 99

**Câu 3.** Kết quả của 59 - 9 là:
A. 50   B. 58   C. 49   D. 68

**Câu 4.** Số cần điền: 22, 24, 26, ..., 30
A. 27   B. 28   C. 29   D. 31

**Câu 5.** 1 chục que tính là:
A. 1 que   B. 10 que   C. 11 que   D. 100 que

**Câu 6.** Hình chữ nhật có:
A. 3 cạnh   B. 4 cạnh   C. 5 cạnh   D. không có cạnh

### II. Tự luận
**Câu 7.** Viết số thích hợp vào chỗ chấm:
a. 6 chục 7 đơn vị = ...        b. 4 chục 0 đơn vị = ...
c. 82 = ... chục ... đơn vị     d. 95 = ... + ...

**Câu 8.** Đặt tính rồi tính:
a. 52 + 16 = ............        b. 74 - 21 = ............
c. 37 + 40 = ............        d. 98 - 6 = .............

**Câu 9.** Nam có 58 nhãn vở. Nam cho bạn 20 nhãn vở. Hỏi Nam còn lại bao nhiêu nhãn vở?
Bài giải: ................................................................

**Câu 10.** Điền dấu >, <, =:
a. 45 + 10 ... 54        b. 76 - 6 ... 70        c. 33 ... 30 + 3        d. 99 ... 100
"""
exams[4]["answer"] = """### I. Trắc nghiệm
1. A  
2. C  
3. A  
4. B  
5. B  
6. B  

### II. Tự luận
**Câu 7:**  
a. 67  
b. 40  
c. 8 chục 2 đơn vị  
d. 90 + 5  

**Câu 8:**  
a. 68  
b. 53  
c. 77  
d. 92  

**Câu 9:**  
Số nhãn vở Nam còn lại là:  
58 - 20 = 38 (nhãn vở)  
Đáp số: 38 nhãn vở.  

**Câu 10:**  
a. >  
b. =  
c. =  
d. <  
"""

# Đề 6
exams[5]["exam"] = """### I. Trắc nghiệm
**Câu 1.** Số 28 đọc là:
A. hai tám   B. hai mươi tám   C. tám mươi hai   D. hai mươi

**Câu 2.** Số lớn hơn 65 và bé hơn 67 là:
A. 64   B. 65   C. 66   D. 67

**Câu 3.** 70 + 6 =:
A. 67   B. 76   C. 706   D. 13

**Câu 4.** 84 - 30 =:
A. 54   B. 81   C. 87   D. 50

**Câu 5.** Tháng 5 có:
A. 28 ngày   B. 29 ngày   C. 30 ngày   D. 31 ngày

**Câu 6.** Vật nào thường có dạng hình tròn?
A. mặt đồng hồ   B. quyển sách   C. bảng lớp   D. viên gạch

### II. Tự luận
**Câu 7.** Sắp xếp các số 17, 71, 70, 77 theo thứ tự bé đến lớn.
........................................................................

**Câu 8.** Tính:
a. 64 + 25 = ............        b. 87 - 43 = ............
c. 20 + 57 = ............        d. 69 - 9 = .............

**Câu 9.** Bố có 40 con gà, mẹ mua thêm 18 con gà. Hỏi nhà em có tất cả bao nhiêu con gà?
Bài giải: ................................................................

**Câu 10.** Điền số thích hợp:
a. 29, 30, 31, ..., 33        b. 80, 70, 60, ..., 40
c. 15 + ... = 35             d. 96 - ... = 76
"""
exams[5]["answer"] = """### I. Trắc nghiệm
1. B  
2. C  
3. B  
4. A  
5. D  
6. A  

### II. Tự luận
**Câu 7:** 17, 70, 71, 77.  

**Câu 8:**  
a. 89  
b. 44  
c. 77  
d. 60  

**Câu 9:**  
Số con gà nhà em có tất cả là:  
40 + 18 = 58 (con gà)  
Đáp số: 58 con gà.  

**Câu 10:**  
a. 32  
b. 50  
c. 20  
d. 20  
"""

# Đề 7
exams[6]["exam"] = """### I. Trắc nghiệm
**Câu 1.** Số gồm 3 chục và 8 đơn vị là:
A. 83   B. 38   C. 30   D. 8

**Câu 2.** Số bé nhất có hai chữ số là:
A. 1   B. 9   C. 10   D. 11

**Câu 3.** Kết quả của 46 + 3 là:
A. 43   B. 49   C. 76   D. 19

**Câu 4.** 92 - 50 =:
A. 42   B. 47   C. 52   D. 90

**Câu 5.** Thứ Ba, thứ Tư, thứ Năm, ..., thứ Bảy. Từ còn thiếu là:
A. thứ Hai   B. thứ Sáu   C. Chủ nhật   D. thứ Ba

**Câu 6.** Hình nào có 3 đỉnh?
A. hình tròn   B. hình vuông   C. hình tam giác   D. hình chữ nhật

### II. Tự luận
**Câu 7.** Viết các số sau theo thứ tự từ 55 đến 60.
........................................................................

**Câu 8.** Đặt tính rồi tính:
a. 31 + 48 = ............        b. 75 - 32 = ............
c. 44 + 20 = ............        d. 89 - 7 = .............

**Câu 9.** Trên cành cây có 27 con chim, sau đó có 12 con bay đi. Hỏi trên cành cây còn lại bao nhiêu con chim?
Bài giải: ................................................................

**Câu 10.** Điền dấu >, <, =:
a. 60 ... 6 chục        b. 72 ... 27        c. 81 - 1 ... 79        d. 25 + 4 ... 30
"""
exams[6]["answer"] = """### I. Trắc nghiệm
1. B  
2. C  
3. B  
4. A  
5. B  
6. C  

### II. Tự luận
**Câu 7:** 55, 56, 57, 58, 59, 60.  

**Câu 8:**  
a. 79  
b. 43  
c. 64  
d. 82  

**Câu 9:**  
Số con chim trên cành cây còn lại là:  
27 - 12 = 15 (con chim)  
Đáp số: 15 con chim.  

**Câu 10:**  
a. =  
b. >  
c. >  
d. <  
"""

# Đề 8
exams[7]["exam"] = """### I. Trắc nghiệm
**Câu 1.** Số 95 gồm:
A. 9 chục 5 đơn vị   B. 5 chục 9 đơn vị   C. 9 đơn vị 5 chục   D. 95 đơn vị

**Câu 2.** Số liền trước của 100 là:
A. 98   B. 99   C. 101   D. 90

**Câu 3.** Kết quả của 23 + 34 là:
A. 57   B. 56   C. 47   D. 67

**Câu 4.** Phép tính nào có kết quả bé nhất?
A. 40 + 5   B. 60 - 10   C. 30 + 8   D. 70 - 20

**Câu 5.** Kim dài chỉ số 12, kim ngắn chỉ số 5. Đồng hồ chỉ:
A. 12 giờ   B. 5 giờ   C. 6 giờ   D. 10 giờ

**Câu 6.** Hình nào có 4 góc?
A. hình tròn   B. hình tam giác   C. hình vuông   D. đoạn thẳng

### II. Tự luận
**Câu 7.** Điền số vào tia số:
41, 42, ..., 44, ..., 46, ...

**Câu 8.** Tính:
a. 58 + 21 = ............        b. 97 - 54 = ............
c. 70 + 9 = .............        d. 86 - 6 = .............

**Câu 9.** Cửa hàng có 65 hộp sữa, đã bán 30 hộp. Hỏi cửa hàng còn lại bao nhiêu hộp sữa?
Bài giải: ................................................................

**Câu 10.** Viết tiếp vào chỗ chấm:
a. 3 ngày trong tuần: ...................................................
b. 2 vật có dạng hình chữ nhật: .........................................
"""
exams[7]["answer"] = """### I. Trắc nghiệm
1. A  
2. B  
3. A  
4. C  
5. B  
6. C  

### II. Tự luận
**Câu 7:** 43, 45, 47.  

**Câu 8:**  
a. 79  
b. 43  
c. 79  
d. 80  

**Câu 9:**  
Số hộp sữa cửa hàng còn lại là:  
65 - 30 = 35 (hộp sữa)  
Đáp số: 35 hộp sữa.  

**Câu 10:**  
a. Ví dụ: thứ Hai, thứ Ba, thứ Tư.  
b. Ví dụ: quyển sách, cái bàn.  
"""

# Đề 9
exams[8]["exam"] = """### I. Trắc nghiệm
**Câu 1.** Số 60 đọc là:
A. sáu mươi   B. sáu không   C. sáu chục   D. không sáu

**Câu 2.** Trong các số 81, 18, 80, 88, số lớn nhất là:
A. 81   B. 18   C. 80   D. 88

**Câu 3.** 36 + 12 =:
A. 48   B. 46   C. 58   D. 24

**Câu 4.** 79 - 20 =:
A. 57   B. 59   C. 99   D. 70

**Câu 5.** Hôm nay là ngày 16 tháng 3. Ngày hôm qua là:
A. ngày 15 tháng 3   B. ngày 17 tháng 3   C. ngày 16 tháng 4   D. ngày 14 tháng 3

**Câu 6.** Một đoạn thẳng có:
A. 1 đầu mút   B. 2 đầu mút   C. 3 đầu mút   D. 4 đầu mút

### II. Tự luận
**Câu 7.** Viết các số 64, 46, 60, 69 theo thứ tự lớn đến bé.
........................................................................

**Câu 8.** Đặt tính rồi tính:
a. 43 + 25 = ............        b. 88 - 36 = ............
c. 50 + 28 = ............        d. 76 - 5 = .............

**Câu 9.** Mai gấp được 34 ngôi sao, Hoa gấp được 23 ngôi sao. Hỏi hai bạn gấp được tất cả bao nhiêu ngôi sao?
Bài giải: ................................................................

**Câu 10.** Điền số thích hợp:
a. 57 = ... + 7        b. 81 = 80 + ...        c. 48 - ... = 40        d. ... + 30 = 92
"""
exams[8]["answer"] = """### I. Trắc nghiệm
1. A  
2. D  
3. A  
4. B  
5. A  
6. B  

### II. Tự luận
**Câu 7:** 69, 64, 60, 46.  

**Câu 8:**  
a. 68  
b. 52  
c. 78  
d. 71  

**Câu 9:**  
Số ngôi sao hai bạn gấp được tất cả là:  
34 + 23 = 57 (ngôi sao)  
Đáp số: 57 ngôi sao.  

**Câu 10:**  
a. 50  
b. 1  
c. 8  
d. 62  
"""

# Đề 10
exams[9]["exam"] = """### I. Trắc nghiệm
**Câu 1.** Số gồm 8 chục và 2 đơn vị là:
A. 28   B. 82   C. 80   D. 20

**Câu 2.** Số liền sau của 99 là:
A. 98   B. 90   C. 100   D. 109

**Câu 3.** Kết quả của 72 - 2 là:
A. 70   B. 74   C. 52   D. 20

**Câu 4.** Phép tính nào có kết quả bằng 66?
A. 60 + 6   B. 66 - 6   C. 56 + 6   D. 76 - 20

**Câu 5.** Thứ tự đúng của các tháng là:
A. tháng 1, tháng 2, tháng 3   B. tháng 2, tháng 1, tháng 3   C. tháng 3, tháng 2, tháng 1   D. tháng 1, tháng 3, tháng 2

**Câu 6.** Vật nào thường có dạng hình vuông?
A. mặt đồng hồ tròn   B. viên gạch lát nền   C. quả bóng   D. cái bút

### II. Tự luận
**Câu 7.** Điền dấu >, <, =:
a. 45 ... 54        b. 90 - 10 ... 80        c. 67 + 2 ... 70        d. 100 ... 99

**Câu 8.** Tính:
a. 36 + 42 = ............        b. 94 - 31 = ............
c. 63 + 6 = .............        d. 85 - 40 = ............

**Câu 9.** Thu có 56 bông hoa, Thu tặng bạn 24 bông. Hỏi Thu còn lại bao nhiêu bông hoa?
Bài giải: ................................................................

**Câu 10.** Quan sát và trả lời:
a. Hình vuông có .... cạnh.  
b. Hình tam giác có .... cạnh.  
c. Hình tròn có .... cạnh.  
d. Hình chữ nhật có .... góc.
"""
exams[9]["answer"] = """### I. Trắc nghiệm
1. B  
2. C  
3. A  
4. A  
5. A  
6. B  

### II. Tự luận
**Câu 7:**  
a. <  
b. =  
c. <  
d. >  

**Câu 8:**  
a. 78  
b. 63  
c. 69  
d. 45  

**Câu 9:**  
Số bông hoa Thu còn lại là:  
56 - 24 = 32 (bông hoa)  
Đáp số: 32 bông hoa.  

**Câu 10:**  
a. 4  
b. 3  
c. 0 (hoặc không có cạnh)  
d. 4  
"""

js_content = f"const examData = {json.dumps(exams, ensure_ascii=False, indent=2)};"

with open("exam_data.js", "w", encoding="utf-8") as f:
    f.write(js_content)
