import json

exams = []
for i in range(11, 21):
    exams.append({
        "id": i,
        "title": f"Đề Nâng Cao {i-10}",
        "exam": "",
        "answer": ""
    })

# Đề Nâng Cao 1
exams[0]["exam"] = """### I. Trắc nghiệm
**Câu 1.** Số lớn nhất có hai chữ số khác nhau là:
A. 99<br>B. 98<br>C. 89<br>D. 90

**Câu 2.** Số bé nhất có hai chữ số mà chữ số hàng chục lớn hơn chữ số hàng đơn vị là:
A. 10<br>B. 11<br>C. 20<br>D. 21

**Câu 3.** Kết quả của 45 + 12 - 20 là:
A. 37<br>B. 47<br>C. 57<br>D. 77

**Câu 4.** Biểu thức nào có kết quả lớn nhất?
A. 70 - 20<br>B. 36 + 12<br>C. 90 - 30<br>D. 25 + 24

**Câu 5.** Dãy số 18, 28, 38, ..., 58. Số còn thiếu là:
A. 39<br>B. 40<br>C. 48<br>D. 50

**Câu 6.** Có 2 hình tam giác riêng biệt ghép thành 1 hình tam giác lớn. Tổng số hình tam giác đếm được là:
A. 2<br>B. 3<br>C. 4<br>D. 5

### II. Tự luận
**Câu 7.** Điền dấu >, <, =:
a. 68 - 20 ... 35 + 13<br>b. 90 - 40 ... 20 + 31
c. 47 + 2 ... 60 - 10<br>d. 88 - 8 ... 70 + 10

**Câu 8.** Tìm số thích hợp:
a. ... + 25 = 68<br>b. 79 - ... = 34
c. 40 + ... + 6 = 96<br>d. ... - 30 = 52

**Câu 9.** Lan có 36 bông hoa. Lan tặng Mai 12 bông, sau đó mẹ cho Lan thêm 20 bông. Hỏi Lan có bao nhiêu bông hoa?
Bài giải: ................................................................

**Câu 10.** Viết tất cả các số có hai chữ số được lập từ 3 và 7. Sắp xếp các số đó từ bé đến lớn.
........................................................................
"""
exams[0]["answer"] = """### I. Trắc nghiệm
1. B
2. A
3. A
4. C
5. C
6. B

### II. Tự luận
**Câu 7:**
a. <
b. <
c. <
d. =

**Câu 8:**
a. 43
b. 45
c. 50
d. 82

**Câu 9:**
Số bông hoa Lan có là:
36 - 12 + 20 = 44 (bông hoa)
Đáp số: 44 bông hoa.

**Câu 10:**
33, 37, 73, 77.
"""

# Đề Nâng Cao 2
exams[1]["exam"] = """### I. Trắc nghiệm
**Câu 1.** Số nào vừa lớn hơn 56 vừa bé hơn 60?
A. 55<br>B. 56<br>C. 58<br>D. 60

**Câu 2.** 8 chục 5 đơn vị bớt 3 chục là:
A. 55<br>B. 58<br>C. 82<br>D. 85

**Câu 3.** 23 + 45 - 8 =:
A. 50<br>B. 60<br>C. 68<br>D. 76

**Câu 4.** Số cần điền vào dãy 92, 82, 72, ..., 52 là:
A. 62<br>B. 63<br>C. 70<br>D. 80

**Câu 5.** Nếu hôm nay là thứ Bảy thì sau 2 ngày nữa là:
A. thứ Bảy<br>B. Chủ nhật<br>C. thứ Hai<br>D. thứ Ba

**Câu 6.** Hình vuông và hình chữ nhật giống nhau ở điểm:
A. đều có 3 cạnh<br>B. đều có 4 góc<br>C. đều không có cạnh<br>D. đều là hình tròn

### II. Tự luận
**Câu 7.** Sắp xếp các số 86, 68, 80, 88, 60 theo thứ tự lớn đến bé.
........................................................................

**Câu 8.** Đặt tính rồi tính:
a. 34 + 25 = ............<br>b. 97 - 53 = ............
c. 56 + 31 = ............<br>d. 88 - 46 = ............

**Câu 9.** Trong hộp có 48 viên kẹo. Kem ăn 15 viên, rồi bỏ thêm vào hộp 10 viên. Hỏi trong hộp có bao nhiêu viên kẹo?
Bài giải: ................................................................

**Câu 10.** Điền số:
a. 15 + ... = 45 + 10<br>b. 90 - ... = 36 + 14
c. ... - 20 = 27 + 30<br>d. 42 + ... = 80 - 8
"""
exams[1]["answer"] = """### I. Trắc nghiệm
1. C
2. A
3. B
4. A
5. C
6. B

### II. Tự luận
**Câu 7:**
88, 86, 80, 68, 60.

**Câu 8:**
a. 59
b. 44
c. 87
d. 42

**Câu 9:**
Số viên kẹo trong hộp có là:
48 - 15 + 10 = 43 (viên kẹo)
Đáp số: 43 viên kẹo.

**Câu 10:**
a. 40
b. 40
c. 77
d. 30
"""

# Đề Nâng Cao 3
exams[2]["exam"] = """### I. Trắc nghiệm
**Câu 1.** Số nào có chữ số hàng chục bé hơn chữ số hàng đơn vị?
A. 72<br>B. 64<br>C. 39<br>D. 91

**Câu 2.** Tổng của 40, 5 và 23 là:
A. 58<br>B. 68<br>C. 73<br>D. 86

**Câu 3.** 96 - 30 - 6 =:
A. 50<br>B. 60<br>C. 66<br>D. 72

**Câu 4.** Biểu thức nào bằng 75?
A. 70 + 6<br>B. 95 - 20<br>C. 45 + 20<br>D. 80 - 4

**Câu 5.** Trong các số 57, 75, 70, 77, số có hàng chục lớn nhất và hàng đơn vị nhỏ nhất là:
A. 57<br>B. 75<br>C. 70<br>D. 77

**Câu 6.** Một hình chữ nhật cắt bởi 1 đường thẳng thành 2 hình nhỏ. Nếu đường cắt nối 2 góc đối nhau thì tạo thành:
A. 2 hình tam giác<br>B. 2 hình tròn<br>C. 2 hình vuông<br>D. 1 hình tròn

### II. Tự luận
**Câu 7.** Viết các số có hai chữ số mà hàng chục là 6, hàng đơn vị lớn hơn 5.
........................................................................

**Câu 8.** Điền dấu >, <, =:
a. 64 + 20 ... 90 - 6<br>b. 55 - 5 ... 20 + 29
c. 32 + 46 ... 88 - 10<br>d. 100 - 40 ... 30 + 31

**Câu 9.** Nam có 27 viên bi. Bình có nhiều hơn Nam 12 viên bi. Hỏi Bình có bao nhiêu viên bi? Hai bạn có tất cả bao nhiêu viên bi?
Bài giải: ................................................................

**Câu 10.** Tìm x:
a. x + 14 = 59<br>b. x - 22 = 35<br>c. 80 - x = 50<br>d. 36 + x = 78
"""
exams[2]["answer"] = """### I. Trắc nghiệm
1. C
2. B
3. B
4. B
5. C
6. A

### II. Tự luận
**Câu 7:**
66, 67, 68, 69.

**Câu 8:**
a. =
b. >
c. =
d. <

**Câu 9:**
Số viên bi Bình có là:
27 + 12 = 39 (viên bi)
Số viên bi hai bạn có tất cả là:
27 + 39 = 66 (viên bi)
Đáp số: 39 viên bi; 66 viên bi.

**Câu 10:**
a. x = 45
b. x = 57
c. x = 30
d. x = 42
"""

# Đề Nâng Cao 4
exams[3]["exam"] = """### I. Trắc nghiệm
**Câu 1.** Số nào gần 70 nhất?
A. 59<br>B. 67<br>C. 82<br>D. 90

**Câu 2.** 4 chục + 5 chục + 7 đơn vị =:
A. 47<br>B. 57<br>C. 90<br>D. 97

**Câu 3.** 84 - 12 + 6 =:
A. 66<br>B. 72<br>C. 78<br>D. 90

**Câu 4.** Nếu 37 + ... = 67 thì số cần điền là:
A. 20<br>B. 30<br>C. 40<br>D. 50

**Câu 5.** Thứ Năm, thứ Sáu, thứ Bảy, ..., thứ Hai. Từ còn thiếu là:
A. thứ Tư<br>B. Chủ nhật<br>C. thứ Ba<br>D. thứ Năm

**Câu 6.** Có 1 hình vuông lớn chia thành 4 hình vuông nhỏ bằng nhau. Đếm được tất cả:
A. 4 hình vuông<br>B. 5 hình vuông<br>C. 6 hình vuông<br>D. 8 hình vuông

### II. Tự luận
**Câu 7.** Điền số vào chỗ chấm:
a. 24, 34, 44, ..., ..., 74
b. 99, 89, 79, ..., ..., 49

**Câu 8.** Đặt tính rồi tính:
a. 62 + 27 = ............<br>b. 94 - 41 = ............
c. 25 + 53 = ............<br>d. 86 - 35 = ............

**Câu 9.** Giá sách có 56 quyển truyện. Kem đọc 14 quyển, sau đó ba mua thêm 22 quyển. Hỏi giá sách có bao nhiêu quyển truyện?
Bài giải: ................................................................

**Câu 10.** Viết 4 số có hai chữ số mà tổng hai chữ số bằng 9.
........................................................................
"""
exams[3]["answer"] = """### I. Trắc nghiệm
1. B
2. D
3. C
4. B
5. B
6. B

### II. Tự luận
**Câu 7:**
a. 54, 64
b. 69, 59

**Câu 8:**
a. 89
b. 53
c. 78
d. 51

**Câu 9:**
Số quyển truyện giá sách có là:
56 - 14 + 22 = 64 (quyển truyện)
Đáp số: 64 quyển truyện.

**Câu 10:**
Có thể viết: 18, 27, 36, 45 (hoặc 54, 63, 72, 81, 90).
"""

# Đề Nâng Cao 5
exams[4]["exam"] = """### I. Trắc nghiệm
**Câu 1.** Số nào có tổng hai chữ số bằng 13?
A. 39<br>B. 49<br>C. 57<br>D. 66

**Câu 2.** Số lớn nhất trong các số có hàng chục là 8 là:
A. 80<br>B. 88<br>C. 89<br>D. 98

**Câu 3.** 100 - 30 - 20 =:
A. 40<br>B. 50<br>C. 60<br>D. 70

**Câu 4.** 17 + 22 + 30 =:
A. 59<br>B. 69<br>C. 79<br>D. 89

**Câu 5.** Hôm nay là ngày 28 tháng 4. Ngày mai là:
A. ngày 27 tháng 4<br>B. ngày 29 tháng 4<br>C. ngày 30 tháng 4<br>D. ngày 1 tháng 5

**Câu 6.** Hình nào có thể lăn được?
A. hình tròn<br>B. hình vuông<br>C. hình tam giác<br>D. hình chữ nhật

### II. Tự luận
**Câu 7.** Viết số theo yêu cầu:
a. Số lớn nhất có hai chữ số: ...
b. Số bé nhất có hai chữ số: ...
c. Số liền trước của 80: ...
d. Số liền sau của 89: ...

**Câu 8.** Tính:
a. 73 - 21 + 5 = ............<br>b. 46 + 30 - 12 = ............
c. 90 - 40 + 18 = ............<br>d. 25 + 24 + 10 = ............

**Câu 9.** Trên sân có 18 con vịt và 21 con gà. Sau đó 10 con gà vào chuồng. Hỏi trên sân còn lại bao nhiêu con vật?
Bài giải: ................................................................

**Câu 10.** Điền dấu >, <, =:
a. 36 + 42 ... 80<br>b. 99 - 9 ... 90<br>c. 45 + 14 ... 60<br>d. 70 - 5 ... 60 + 6
"""
exams[4]["answer"] = """### I. Trắc nghiệm
1. B
2. C
3. B
4. B
5. B
6. A

### II. Tự luận
**Câu 7:**
a. 99
b. 10
c. 79
d. 90

**Câu 8:**
a. 57
b. 64
c. 68
d. 59

**Câu 9:**
Số con vật trên sân còn lại là:
18 + 21 - 10 = 29 (con vật)
Đáp số: 29 con vật.

**Câu 10:**
a. <
b. =
c. <
d. <
"""

# Đề Nâng Cao 6
exams[5]["exam"] = """### I. Trắc nghiệm
**Câu 1.** Số nào vừa có hàng chục là 7 vừa lớn hơn 75?
A. 70<br>B. 74<br>C. 76<br>D. 85

**Câu 2.** Hiệu của 88 và 35 là:
A. 43<br>B. 53<br>C. 63<br>D. 123

**Câu 3.** Tổng của 26 và 43 rồi bớt 20 là:
A. 49<br>B. 59<br>C. 69<br>D. 89

**Câu 4.** Số cần điền: 11, 22, 33, ..., 55
A. 34<br>B. 40<br>C. 44<br>D. 45

**Câu 5.** Sau 3 ngày nữa kể từ thứ Hai là:
A. thứ Ba<br>B. thứ Tư<br>C. thứ Năm<br>D. thứ Sáu

**Câu 6.** Có 3 đoạn thẳng nối 3 điểm khác nhau thành một hình kín. Hình đó là:
A. hình tròn<br>B. hình tam giác<br>C. hình vuông<br>D. hình chữ nhật

### II. Tự luận
**Câu 7.** Tìm số bị che:
a. 6... > 65 và < 68: ...<br>b. ...4 > 70 và < 80: ...
c. 9... < 93 và > 90: ...<br>d. ...0 = 8 chục: ...

**Câu 8.** Đặt tính rồi tính:
a. 41 + 38 = ............<br>b. 76 - 24 = ............
c. 53 + 26 = ............<br>d. 99 - 57 = ............

**Câu 9.** Có 65 quả táo trong giỏ. Ban đầu lấy ra 20 quả, sau đó lại lấy thêm 13 quả. Hỏi trong giỏ còn bao nhiêu quả táo?
Bài giải: ................................................................

**Câu 10.** Sắp xếp kết quả các phép tính sau từ bé đến lớn:
45 + 10; 90 - 40; 23 + 34; 88 - 30.
........................................................................
"""
exams[5]["answer"] = """### I. Trắc nghiệm
1. C
2. B
3. A
4. C
5. C
6. B

### II. Tự luận
**Câu 7:**
a. 66 hoặc 67
b. 74
c. 91 hoặc 92
d. 80

**Câu 8:**
a. 79
b. 52
c. 79
d. 42

**Câu 9:**
Số quả táo trong giỏ còn lại là:
65 - 20 - 13 = 32 (quả táo)
Đáp số: 32 quả táo.

**Câu 10:**
Các kết quả: 55; 50; 57; 58.
Sắp xếp: 90 - 40, 45 + 10, 23 + 34, 88 - 30.
"""

# Đề Nâng Cao 7
exams[6]["exam"] = """### I. Trắc nghiệm
**Câu 1.** Số có hai chữ số giống nhau và lớn hơn 80 là:
A. 77<br>B. 80<br>C. 88<br>D. 98

**Câu 2.** 5 chục 6 đơn vị thêm 3 chục 2 đơn vị là:
A. 78<br>B. 88<br>C. 89<br>D. 98

**Câu 3.** 69 - 20 + 10 =:
A. 39<br>B. 49<br>C. 59<br>D. 79

**Câu 4.** Phép tính nào có kết quả bé hơn 50?
A. 70 - 20<br>B. 36 + 14<br>C. 88 - 40<br>D. 41 + 9

**Câu 5.** Tháng có 30 ngày là:
A. tháng 2<br>B. tháng 4<br>C. tháng 5<br>D. tháng 7

**Câu 6.** Nếu vẽ thêm 1 đường thẳng nối hai đỉnh đối nhau của hình vuông, ta được:
A. 2 hình tam giác<br>B. 2 hình tròn<br>C. 3 hình vuông<br>D. 4 hình chữ nhật

### II. Tự luận
**Câu 7.** Điền số thích hợp:
a. 100 = ... chục<br>b. 73 = ... + 3
c. 6 chục 9 đơn vị = ...<br>d. 85 = ... chục ... đơn vị

**Câu 8.** Tìm x:
a. x + 20 = 86<br>b. 75 - x = 25<br>c. x - 13 = 46<br>d. 34 + x = 89

**Câu 9.** Trong bể có 24 con cá vàng và 15 con cá đỏ. Mẹ mua thêm 20 con cá nữa. Hỏi trong bể có tất cả bao nhiêu con cá?
Bài giải: ................................................................

**Câu 10.** Viết các số có hai chữ số, hàng chục là 4, hàng đơn vị là số chẵn.
........................................................................
"""
exams[6]["answer"] = """### I. Trắc nghiệm
1. C
2. B
3. C
4. C
5. B
6. A

### II. Tự luận
**Câu 7:**
a. 10
b. 70
c. 69
d. 8 chục 5 đơn vị

**Câu 8:**
a. x = 66
b. x = 50
c. x = 59
d. x = 55

**Câu 9:**
Số con cá trong bể có tất cả là:
24 + 15 + 20 = 59 (con cá)
Đáp số: 59 con cá.

**Câu 10:**
40, 42, 44, 46, 48.
"""

# Đề Nâng Cao 8
exams[7]["exam"] = """### I. Trắc nghiệm
**Câu 1.** Số nào nằm giữa 47 và 49?
A. 46<br>B. 48<br>C. 50<br>D. 57

**Câu 2.** Số nào có hàng đơn vị bằng 0 và lớn hơn 70?
A. 60<br>B. 70<br>C. 80<br>D. 71

**Câu 3.** 58 + 21 - 9 =:
A. 60<br>B. 70<br>C. 79<br>D. 88

**Câu 4.** Số cần điền vào ... - 14 = 55 là:
A. 41<br>B. 59<br>C. 69<br>D. 79

**Câu 5.** Nếu đồng hồ chỉ 7 giờ đúng, sau 2 giờ nữa là:
A. 5 giờ<br>B. 7 giờ<br>C. 8 giờ<br>D. 9 giờ

**Câu 6.** Có 4 hình vuông nhỏ ghép thành 1 hình vuông lớn. Tổng số hình vuông là:
A. 4<br>B. 5<br>C. 6<br>D. 8

### II. Tự luận
**Câu 7.** Điền dấu >, <, =:
a. 50 + 28 ... 90 - 12<br>b. 66 - 16 ... 25 + 24
c. 87 - 30 ... 40 + 17<br>d. 34 + 45 ... 100 - 20

**Câu 8.** Tính:
a. 28 + 31 + 10 = ............<br>b. 96 - 24 - 20 = ............
c. 47 + 12 - 30 = ............<br>d. 75 - 25 + 19 = ............

**Câu 9.** Thư có 72 nhãn dán. Thư dùng 30 nhãn dán để đổi quà, rồi được cô giáo thưởng thêm 15 nhãn dán. Hỏi Thư có bao nhiêu nhãn dán?
Bài giải: ................................................................

**Câu 10.** Tìm 3 số có hai chữ số lớn hơn 80 và bé hơn 90.
........................................................................
"""
exams[7]["answer"] = """### I. Trắc nghiệm
1. B
2. C
3. B
4. C
5. D
6. B

### II. Tự luận
**Câu 7:**
a. =
b. >
c. =
d. <

**Câu 8:**
a. 69
b. 52
c. 29
d. 69

**Câu 9:**
Số nhãn dán Thư có là:
72 - 30 + 15 = 57 (nhãn dán)
Đáp số: 57 nhãn dán.

**Câu 10:**
Có thể viết: 81, 82, 83 (hoặc các số khác từ 81 đến 89).
"""

# Đề Nâng Cao 9
exams[8]["exam"] = """### I. Trắc nghiệm
**Câu 1.** Số nào có hàng chục lớn hơn 5 và hàng đơn vị bé hơn 3?
A. 42<br>B. 61<br>C. 53<br>D. 75

**Câu 2.** 90 - 40 + 7 =:
A. 43<br>B. 47<br>C. 57<br>D. 67

**Câu 3.** 35 + 24 + 10 =:
A. 59<br>B. 69<br>C. 79<br>D. 89

**Câu 4.** Biểu thức nào bằng 58?
A. 80 - 20<br>B. 46 + 12<br>C. 70 - 11<br>D. 35 + 20

**Câu 5.** Ngày 30 tháng 6 là thứ Ba. Ngày 1 tháng 7 là:
A. thứ Hai<br>B. thứ Ba<br>C. thứ Tư<br>D. thứ Năm

**Câu 6.** Hình có 4 cạnh, 4 góc, các cạnh đối diện bằng nhau là:
A. hình tròn<br>B. hình tam giác<br>C. hình chữ nhật<br>D. đoạn thẳng

### II. Tự luận
**Câu 7.** Sắp xếp các số 73, 37, 70, 77, 30 theo thứ tự bé đến lớn.
........................................................................

**Câu 8.** Tìm x:
a. x + 32 = 86<br>b. x - 25 = 43<br>c. 99 - x = 54<br>d. 47 + x = 79

**Câu 9.** Nam có 45 thẻ bài. Nam cho em 12 thẻ, cho bạn 10 thẻ. Hỏi Nam còn bao nhiêu thẻ bài?
Bài giải: ................................................................

**Câu 10.** Điền số thích hợp:
a. 24 + ... = 64<br>b. 86 - ... = 56
c. ... + 12 = 79<br>d. ... - 30 = 48
"""
exams[8]["answer"] = """### I. Trắc nghiệm
1. B
2. C
3. B
4. B
5. C
6. C

### II. Tự luận
**Câu 7:**
30, 37, 70, 73, 77.

**Câu 8:**
a. x = 54
b. x = 68
c. x = 45
d. x = 32

**Câu 9:**
Số thẻ bài Nam còn lại là:
45 - 12 - 10 = 23 (thẻ bài)
Đáp số: 23 thẻ bài.

**Câu 10:**
a. 40
b. 30
c. 67
d. 78
"""

# Đề Nâng Cao 10
exams[9]["exam"] = """### I. Trắc nghiệm
**Câu 1.** Số lớn nhất bé hơn 100 là:
A. 98<br>B. 99<br>C. 100<br>D. 90

**Câu 2.** Số bé nhất lớn hơn 89 là:
A. 88<br>B. 89<br>C. 90<br>D. 91

**Câu 3.** 64 + 25 - 30 =:
A. 49<br>B. 59<br>C. 69<br>D. 89

**Câu 4.** 100 - 50 + 18 =:
A. 58<br>B. 68<br>C. 78<br>D. 88

**Câu 5.** Dãy nào được sắp xếp từ lớn đến bé?
A. 45, 54, 64<br>B. 80, 70, 60<br>C. 39, 49, 59<br>D. 12, 21, 31

**Câu 6.** Nếu một hình tam giác có 3 cạnh, 3 đỉnh. Hai hình tam giác riêng biệt có tất cả:
A. 3 cạnh<br>B. 4 cạnh<br>C. 6 cạnh<br>D. 8 cạnh

### II. Tự luận
**Câu 7.** Viết các số có hai chữ số mà hàng chục là 9, hàng đơn vị bé hơn 5.
........................................................................

**Câu 8.** Đặt tính rồi tính:
a. 54 + 35 = ............<br>b. 98 - 46 = ............
c. 67 + 21 = ............<br>d. 89 - 24 = ............

**Câu 9.** Một cửa hàng có 96 quyển vở. Buổi sáng bán 30 quyển, buổi chiều bán 25 quyển. Hỏi cửa hàng còn bao nhiêu quyển vở?
Bài giải: ................................................................

**Câu 10.** Điền dấu >, <, =:
a. 78 - 20 ... 40 + 18<br>b. 25 + 34 ... 90 - 31
c. 100 - 10 ... 80 + 9<br>d. 66 + 3 ... 70 - 1
"""
exams[9]["answer"] = """### I. Trắc nghiệm
1. B
2. C
3. B
4. B
5. B
6. C

### II. Tự luận
**Câu 7:**
90, 91, 92, 93, 94.

**Câu 8:**
a. 89
b. 52
c. 88
d. 65

**Câu 9:**
Số quyển vở cửa hàng còn lại là:
96 - 30 - 25 = 41 (quyển vở)
Đáp số: 41 quyển vở.

**Câu 10:**
a. =
b. =
c. >
d. =
"""

js_content = f"\\n\\n// Các Đề Nâng Cao\\nconst advancedExamData = {json.dumps(exams, ensure_ascii=False, indent=2)};\\n\\nexamData.push(...advancedExamData);\\n"

with open("exam_data.js", "a", encoding="utf-8") as f:
    f.write(js_content)
