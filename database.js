var STANDARD_DETAIL = {
    dam: {
        minValue: 13,
        maxValue: 15
    },
    duong: {
        minValue: 55,
        maxValue: 60
    },
    beo: {
        minValue: 20,
        maxValue: 25
    }
};

var STANDARD_ENERGY = {
    'Nam': {
        60: [1900, 2200, 0],
        30: [2200, 2700, 3200],
        18: [2300, 2700, 3200]
    },
    'Nữ': {
        60: [1800, 0, 0],
        30: [2100, 2200, 2600],
        18: [2200, 2300, 2600]
    }
};




var EVALUATE_ENERGY = {
    'less': {
        description: 'Thiếu',
        evaluate: 'Tổng năng lượng thấp hơn mức năng lượng nhu cầu theo khuyến nghị.',
        recommend: 'Bổ sung dinh dưỡng theo đường uống với sữa đầy đủ và cân đối, đạm chất lượng cao, đầy đủ vitamin và khoáng chất, kết hợp chế độ ăn đa dạng các loại thực phẩm.'
    },
    'enough': {
        description: 'Đủ',
        evaluate: 'Đạt mức năng lượng nhu cầu theo khuyến nghị',
        recommend: 'Cần áp dụng chế độ dinh dưỡng hợp lý gồm đầy đủ, đa dạng các lọai thực phẩm, đảm bảo 4 nhóm thực phẩm chính(đạm, đường, béo, vitamin), kết hợp uống bồ sung 1- 2 ly sữa /ngày.'
    },
    'over': {
        description: 'Thừa',
        evaluate: 'Tổng năng lượng cao hơn mức năng lượng nhu cầu theo khuyến nghị.',
        recommend: 'Bớt ăn các món nhiều tinh bột (cơm, bánh mì…), bớt mỡ, đường, thịt, không ăn vặt, ăn đêm, tăng cường vận động, hạn chế rượu bia.'
    }
};

var EVALUATE_DETAIL = {};
EVALUATE_DETAIL.dam = {
    'less': {
        description: 'Thiếu',
        evaluate: 'Đạm cung cấp thiếu. Nguy cơ: Suy dinh dưỡng, phù do giảm đạm máu, teo cơ, loãng xương, suy nhược cơ thể, thiếu máu, vết thương lâu lành.',
        recommend: 'Bổ sung dinh dưỡng theo đường uống với sữa đầy đủ và cân đối, với đạm chất lượng cao kết hợp chế độ ăn giàu thịt trắng, cá, trứng, đậu…'
    },
    'enough': {
        description: 'Đủ',
        evaluate: '',
        recommend: ''
    },
    'over': {
        description: 'Thừa',
        evaluate: 'Đạm cung cấp vượt nhu cầu theo khuyến nghị. Nguy cơ: Thừa cân, cholesterol máu cao, bệnh tim mạch, loãng xương, bệnh thận, gút.',
        recommend: 'Giảm bớt các thức ăn giàu đạm như thịt bò, các lọai thịt trắng như cá phi lê, trứng, đậu hũ, các lọai đậu.'
    }
};

EVALUATE_DETAIL.duong = {
    'less': {
        description: 'Thiếu',
        evaluate: 'Đường cung cấp thiếu. Nguy cơ: Thiếu năng lượng, suy dinh dưỡng.',
        recommend: 'Bổ sung dinh dưỡng theo đường uống, kết hợp ăn thêm tinh bột, các lọai ngũ cốc (cơm, khoai, mì, bắp, bún…), trái cây ngọt.'
    },
    'enough': {
        description: 'Đủ',
        evaluate: '',
        recommend: ''
    },
    'over': {
        description: 'Thừa',
        evaluate: 'Đường cung cấp vượt nhu cầu khuyến nghị.  Nguy cơ: Thừa cân, béo phì và các biến chứng của thừa cân, béo phì, gan nhiễm mỡ, tăng triglyceride máu, đái tháo đường type 2…',
        recommend: 'Giảm bớt tinh bột (cơm, xôi, bánh mì…), các lọai bánh kẹo ngọt, trái cây ngọt.'
    }
};

EVALUATE_DETAIL.beo = {
    'less': {
        description: 'Thiếu',
        evaluate: 'Cung cấp thiếu chất béo. Nguy cơ: Thiếu năng lượng, suy dinh dưỡng, thành mạch không bền (xuất huyết thành mạch, xuất huyết não), thiếu vitamin, suy nhược cơ thể, ung thư.',
        recommend: 'Bổ sung dinh dưỡng theo đường uống, kết hợp dùng thêm dầu thực vật trong chế biến món ăn, dùng các lọai cá béo chứa omega 3, các lọai hạt có dầu…'
    },
    'enough': {
        description: 'Đủ',
        evaluate: '',
        recommend: ''
    },
    'over': {
        description: 'Thừa',
        evaluate: 'Chất béo cung cấp vượt nhu cầu khuyến nghị. Nguy cơ: Thừa năng lượng, thừa cân, béo phì, xơ vữa động mạch, tăng mỡ máu, mỡ nội tạng, bệnh tim mạch, nhồi máu não…',
        recommend: 'Hạn chế các chất béo xấu (mỡ động vật, nội tạng, da, nước hầm xương…), thức ăn chứa transfat (thức ăn dùng dầu chiên lại nhiều lần), hạn chế chiên xào, nên ăn thức ăn hấp luộc, hạn chế thức ăn nhanh (fastfood)…'
    }
};

var LEVEL = ["less", "enough", "over"];



var filter_database = [];
filter_database[0] = [];
filter_database[1] = [];
filter_database[2] = [];
filter_database[3] = [];

filter_database[0] = [
  {"buoi":"Sáng", "thucan": "Bánh bao nhân thịt", "nangluong":328, "dam":16.1, "beo":7.9, "duong":48.1, "vitamin":1.5},
  {"buoi":"Sáng", "thucan": "Bánh Bèo", "nangluong":358, "dam":13.3, "beo":13.9, "duong":44.9, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Bánh Bột Lọc", "nangluong":487, "dam":13.2, "beo":20.2, "duong":62.7, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Bánh Chưng ", "nangluong":407, "dam":14.9, "beo":5.5, "duong":74.7, "vitamin":3.1},
  {"buoi":"Sáng", "thucan": "Bánh mì thịt", "nangluong":461, "dam":17.8, "beo":18.7, "duong":55.3, "vitamin":2},
  {"buoi":"Sáng", "thucan": "Bánh Mì Chả Lụa", "nangluong":431, "dam":20.1, "beo":14.2, "duong":55.6, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Bánh Mì Sandwich kep thịt", "nangluong":468, "dam":18.9, "beo":26.2, "duong":38.9, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Bánh Giò", "nangluong":216, "dam":9.3, "beo":7.1, "duong":28.5, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Bánh ướt", "nangluong":749, "dam":22.9, "beo":19.3, "duong":120.9, "vitamin":3.8},
  {"buoi":"Sáng", "thucan": "Bánh Canh Cua ", "nangluong":379, "dam":21.4, "beo":8.4, "duong":54.3, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Bánh Canh Giò Heo", "nangluong":483, "dam":19, "beo":23.6, "duong":48.6, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Bánh Canh Thịt Gà", "nangluong":346, "dam":12.8, "beo":11.1, "duong":48.5, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Bánh Canh Thịt Heo", "nangluong":322, "dam":12.8, "beo":8.5, "duong":48.5, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Bún Bò Huế", "nangluong":479, "dam":18.4, "beo":16, "duong":65.3, "vitamin":1.6},
  {"buoi":"Sáng", "thucan": "Bún Mắm", "nangluong":480, "dam":28.2, "beo":15.5, "duong":56.8, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Bún Măng", "nangluong":485, "dam":20.9, "beo":19.5, "duong":56.4, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Bún Riêu", "nangluong":482, "dam":16.5, "beo":16.8, "duong":66, "vitamin":5.3},
  {"buoi":"Sáng", "thucan": "Bún Thịt Nướng", "nangluong":451, "dam":14.7, "beo":13.7, "duong":67.3, "vitamin":5.8},
  {"buoi":"Sáng", "thucan": "Bún Xào", "nangluong":570, "dam":23.4, "beo":28, "duong":56, "vitamin":3.4},
  {"buoi":"Sáng", "thucan": "cà phê đen", "nangluong":40, "dam":0, "beo":0, "duong":9.9, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Cà Phê sữa", "nangluong":85, "dam":1, "beo":2.4, "duong":14, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Cháo Lòng", "nangluong":412, "dam":30.8, "beo":13.5, "duong":41.7, "vitamin":2.3},
  {"buoi":"Sáng", "thucan": "Cháo gỏi Vịt", "nangluong":930, "dam":50.2, "beo":60.3, "duong":47.1, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Cháo Huyết+Quẩy", "nangluong":332, "dam":22.1, "beo":8.9, "duong":40.8, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Cơm tấm sườn", "nangluong":527, "dam":20.7, "beo":13.3, "duong":81.6, "vitamin":2.2},
  {"buoi":"Sáng", "thucan": "Cơm tấm chả", "nangluong":592, "dam":17, "beo":18.1, "duong":90.7, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Hủ Tíu Bò Kho", "nangluong":410, "dam":17, "beo":13.4, "duong":55.4, "vitamin":4.9},
  {"buoi":"Sáng", "thucan": "Hủ Tíu Bò Nam Vang", "nangluong":400, "dam":24.3, "beo":14.8, "duong":43.5, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Hủ Tíu Mì", "nangluong":410, "dam":16.7, "beo":12.9, "duong":56.9, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Hoành Thánh", "nangluong":248, "dam":12.3, "beo":7.4, "duong":31.7, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Hủ Tíu Xào", "nangluong":646, "dam":41.4, "beo":25.5, "duong":62.8, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Mì Xào Dòn", "nangluong":638, "dam":42.2, "beo":29.3, "duong":51.9, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Mì Quảng ", "nangluong":541, "dam":22.4, "beo":20.2, "duong":67.4, "vitamin":4.5},
  {"buoi":"Sáng", "thucan": "Miến Gà", "nangluong":635, "dam":17.8, "beo":18.1, "duong":100.2, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Nui Thịt Heo", "nangluong":414, "dam":17.5, "beo":9.3, "duong":61.4, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Nui Chiên", "nangluong":523, "dam":18.2, "beo":24.3, "duong":58, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Phở Bò Chín (nhỏ)", "nangluong":430, "dam":20.9, "beo":12.2, "duong":59.3, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Phở Bò Chín (TB)", "nangluong":456, "dam":25.5, "beo":13.1, "duong":59.3, "vitamin":4.1},
  {"buoi":"Sáng", "thucan": "Phở Bò Chín (Lớn)", "nangluong":517, "dam":31.1, "beo":13.9, "duong":67, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Phở Bò Tái (nhỏ)", "nangluong":413, "dam":17.9, "beo":11.7, "duong":59.3, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Phở Bò Tái (TB)", "nangluong":431, "dam":21.1, "beo":12.3, "duong":59.3, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Phở Bò Tái (Lớn)", "nangluong":543, "dam":35.7, "beo":14.8, "duong":67, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Phở Bò Viên", "nangluong":431, "dam":16.3, "beo":14.1, "duong":59.6, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Phở Gà (nhỏ)", "nangluong":458, "dam":18.8, "beo":16.2, "duong":59.3, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Phở Gà (TB)", "nangluong":483, "dam":21.3, "beo":17.9, "duong":59.3, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Phở Gà (Lớn)", "nangluong":561, "dam":26.6, "beo":20.8, "duong":67, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Sữa chua (hủ 110ml)", "nangluong":137, "dam":3.8, "beo":4, "duong":21.6, "vitamin":0.6},
  {"buoi":"Sáng", "thucan": "Sữa tươi ( 200ml)", "nangluong":152, "dam":6.5, "beo":6, "duong":18.1, "vitamin":0.24},
  {"buoi":"Sáng", "thucan": "Xôi Bắp", "nangluong":313, "dam":8.2, "beo":8.3, "duong":51.3, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Xôi Đậu Phộng", "nangluong":659, "dam":19.9, "beo":28.3, "duong":81.4, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Xôi Đậu Xanh", "nangluong":532, "dam":15.4, "beo":11.2, "duong":92.8, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Xôi Gấc", "nangluong":589, "dam":12.1, "beo":13.8, "duong":102.4, "vitamin":3.1},
  {"buoi":"Sáng", "thucan": "Xôi Vò", "nangluong":509, "dam":14.8, "beo":6.9, "duong":97.2, "vitamin":0},
  {"buoi":"Sáng", "thucan": "Xôi mặn", "nangluong":499, "dam":17.9, "beo":18.9, "duong":64.7, "vitamin":1.5}
]

filter_database[1] = [
  {"buoi":"Trưa", "thucan": "1 chen cơm ", "nangluong":200, "dam":4.6, "beo":0.6, "duong":44.2, "vitamin":0.45},
  {"buoi":"Trưa", "thucan": "Bầu xào trứng", "nangluong":109, "dam":4, "beo":8.5, "duong":4, "vitamin":2.5},
  {"buoi":"Trưa", "thucan": "Trứng Cút", "nangluong":17, "dam":1.5, "beo":1.2, "duong":0.1, "vitamin":0},
  {"buoi":"Trưa", "thucan": "Trứng Ngỗng", "nangluong":210, "dam":14.8, "beo":16.2, "duong":1.1, "vitamin":0},
  {"buoi":"Trưa", "thucan": "Trứng Gà Ta", "nangluong":58, "dam":5.2, "beo":4.1, "duong":0.2, "vitamin":0},
  {"buoi":"Trưa", "thucan": "Trứng gà Công nghiệp", "nangluong":81, "dam":7.3, "beo":5.7, "duong":0.2, "vitamin":0},
  {"buoi":"Trưa", "thucan": "Trứng Vịt Lộn", "nangluong":98, "dam":7.3, "beo":6.7, "duong":2.2, "vitamin":0},
  {"buoi":"Trưa", "thucan": "1 Trứng Vịt ", "nangluong":90, "dam":6.4, "beo":7, "duong":0.5, "vitamin":0},
  {"buoi":"Trưa", "thucan": "Cá bạc má kho ", "nangluong":167, "dam":21.1, "beo":5.3, "duong":8.7, "vitamin":1.2},
  {"buoi":"Trưa", "thucan": "cá đói kho ", "nangluong":82, "dam":10.2, "beo":2.7, "duong":4.4, "vitamin":0.6},
  {"buoi":"Trưa", "thucan": "cá hú kho ", "nangluong":184, "dam":15.6, "beo":9.7, "duong":8.7, "vitamin":1.1},
  {"buoi":"Trưa", "thucan": "Cá lóc kho ", "nangluong":131, "dam":15.7, "beo":3.8, "duong":8.7, "vitamin":1.2},
  {"buoi":"Trưa", "thucan": "Cá Ngừ Kho", "nangluong":122, "dam":17.7, "beo":1.8, "duong":8.7, "vitamin":1.2},
  {"buoi":"Trưa", "thucan": "Canh Bí", "nangluong":42, "dam":1.2, "beo":2.1, "duong":4.6, "vitamin":1.3},
  {"buoi":"Trưa", "thucan": "Canh cải", "nangluong":37, "dam":1.8, "beo":2.1, "duong":2.8, "vitamin":1.4},
  {"buoi":"Trưa", "thucan": "Canh Chua ", "nangluong":29, "dam":1.9, "beo":1.1, "duong":2.9, "vitamin":1.7},
  {"buoi":"Trưa", "thucan": "Canh Hẹ", "nangluong":33, "dam":2.9, "beo":2.1, "duong":0.7, "vitamin":0.8},
  {"buoi":"Trưa", "thucan": "Canh Khổ qua hầm", "nangluong":175, "dam":10, "beo":11.4, "duong":7.9, "vitamin":2},
  {"buoi":"Trưa", "thucan": "Canh mướp", "nangluong":31, "dam":1.4, "beo":2.1, "duong":1.6, "vitamin":0.7},
  {"buoi":"Trưa", "thucan": "Chả cá", "nangluong":133, "dam":11.3, "beo":9.7, "duong":0.2, "vitamin":0.5},
  {"buoi":"Trưa", "thucan": "Chả giò", "nangluong":41, "dam":1.8, "beo":2.1, "duong":3.6, "vitamin":0.05},
  {"buoi":"Trưa", "thucan": "đậu hủ nhồi thịt ", "nangluong":328, "dam":18.7, "beo":25.8, "duong":5.3, "vitamin":2.1},
  {"buoi":"Trưa", "thucan": "Gà kho gừng", "nangluong":301, "dam":21.9, "beo":19.1, "duong":10.3, "vitamin":2.2},
  {"buoi":"Trưa", "thucan": "gà rô ti ", "nangluong":300, "dam":20.3, "beo":23.1, "duong":2.8, "vitamin":0.7},
  {"buoi":"Trưa", "thucan": "Gà xào sả ớt", "nangluong":272, "dam":20.4, "beo":19.1, "duong":4.7, "vitamin":0.9},
  {"buoi":"Trưa", "thucan": "khổ qua xào trứng ", "nangluong":114, "dam":4.6, "beo":8.5, "duong":4.6, "vitamin":2.6},
  {"buoi":"Trưa", "thucan": "Sườn nướng", "nangluong":111, "dam":10.3, "beo":7.3, "duong":1, "vitamin":0.4},
  {"buoi":"Trưa", "thucan": "Tép Rang", "nangluong":101, "dam":5.6, "beo":6.5, "duong":4.8, "vitamin":0.9},
  {"buoi":"Trưa", "thucan": "thịt bò xào hành tây", "nangluong":132, "dam":11.8, "beo":6.9, "duong":5.8, "vitamin":1.9},
  {"buoi":"Trưa", "thucan": "Thịt Heo Quay", "nangluong":146, "dam":9.2, "beo":12, "duong":0, "vitamin":0.2},
  {"buoi":"Trưa", "thucan": "Thịt heo xào đậu que", "nangluong":240, "dam":20.5, "beo":10.2, "duong":16.6, "vitamin":2.6},
  {"buoi":"Trưa", "thucan": "thit kho tiêu ", "nangluong":200, "dam":21.2, "beo":7.6, "duong":11.5, "vitamin":1.1},
  {"buoi":"Trưa", "thucan": "thit kho trứng", "nangluong":315, "dam":19.8, "beo":22.9, "duong":75, "vitamin":2}
]

filter_database[2] = [
  {"buoi":"Chiều", "thucan": "Bầu xào trứng", "nangluong":109, "dam":4, "beo":8.5, "duong":4, "vitamin":2.5},
  {"buoi":"Chiều", "thucan": "Canh Bí", "nangluong":42, "dam":1.2, "beo":2.1, "duong":4.6, "vitamin":1.3},
  {"buoi":"Chiều", "thucan": "1 chén Cơm", "nangluong":200, "dam":4.6, "beo":0.6, "duong":44.2, "vitamin":0.45},
  {"buoi":"Chiều", "thucan": "Canh cải", "nangluong":37, "dam":1.8, "beo":2.1, "duong":2.8, "vitamin":1.4},
  {"buoi":"Chiều", "thucan": "Canh Chua ", "nangluong":29, "dam":1.9, "beo":1.1, "duong":2.9, "vitamin":1.7},
  {"buoi":"Chiều", "thucan": "Canh Hẹ", "nangluong":33, "dam":2.9, "beo":2.1, "duong":0.7, "vitamin":0.8},
  {"buoi":"Chiều", "thucan": "Canh Khổ qua hầm", "nangluong":175, "dam":10, "beo":11.4, "duong":7.9, "vitamin":2},
  {"buoi":"Chiều", "thucan": "Canh mướp", "nangluong":31, "dam":1.4, "beo":2.1, "duong":1.6, "vitamin":0.7},
  {"buoi":"Chiều", "thucan": "Chả cá", "nangluong":133, "dam":11.3, "beo":9.7, "duong":0.2, "vitamin":0.5},
  {"buoi":"Chiều", "thucan": "Chả giò", "nangluong":41, "dam":1.8, "beo":2.1, "duong":3.6, "vitamin":0.05},
  {"buoi":"Chiều", "thucan": "khổ qua xào trứng ", "nangluong":114, "dam":4.6, "beo":8.5, "duong":4.6, "vitamin":2.6},
  {"buoi":"Chiều", "thucan": "Sườn nướng", "nangluong":111, "dam":10.3, "beo":7.3, "duong":1, "vitamin":0.4},
  {"buoi":"Chiều", "thucan": "Tép Rang", "nangluong":101, "dam":5.6, "beo":6.5, "duong":4.8, "vitamin":0.9},
  {"buoi":"Chiều", "thucan": "thịt bò xào hành tây", "nangluong":132, "dam":11.8, "beo":6.9, "duong":5.8, "vitamin":1.9},
  {"buoi":"Chiều", "thucan": "Thịt Heo Quay", "nangluong":146, "dam":9.2, "beo":12, "duong":0, "vitamin":0.2},
  {"buoi":"Chiều", "thucan": "Thịt heo xào đậu que", "nangluong":240, "dam":20.5, "beo":10.2, "duong":16.6, "vitamin":2.6}
];

filter_database[3]=[
  {"buoi":"Trái Cây& Thức uống", "thucan": "Bia", "nangluong":141, "dam":1.6, "beo":0, "duong":7.5, "vitamin":0.1},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Bưởi ( múi)", "nangluong":8, "dam":0.1, "beo":0, "duong":1.9, "vitamin":0.3},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Bơ/Trái", "nangluong":184, "dam":3.5, "beo":17.1, "duong":4.2, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Cam ", "nangluong":93, "dam":2.3, "beo":0, "duong":21, "vitamin":4.1},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Chôm Chôm (trái)", "nangluong":14, "dam":0.3, "beo":0, "duong":3.3, "vitamin":0.27},
  {"buoi":"Trái Cây& Thức uống", "thucan": "chuối ", "nangluong":47, "dam":0.6, "beo":0.2, "duong":10.7, "vitamin":0.24},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Cocktail", "nangluong":158, "dam":0.9, "beo":0.1, "duong":38.6, "vitamin":1.2},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Coóc", "nangluong":34, "dam":1, "beo":0, "duong":7.4, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Củ Sắn", "nangluong":52, "dam":1.9, "beo":0, "duong":11.1, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "dưa hấu (miếng)", "nangluong":21, "dam":1.6, "beo":0.3, "duong":3, "vitamin":1},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Dâu Tây", "nangluong":11, "dam":0.5, "beo":0.1, "duong":2, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Đu Đủ (miếng)", "nangluong":125, "dam":3.6, "beo":0, "duong":27.7, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Kem/cây", "nangluong":86, "dam":1.3, "beo":3.7, "duong":11.1, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Kem Hộp", "nangluong":381, "dam":6, "beo":17, "duong":50.8, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Ly cam Vắt ", "nangluong":226, "dam":0.9, "beo":0, "duong":55.7, "vitamin":1.2},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Lê ", "nangluong":91, "dam":1.4, "beo":0.4, "duong":20.6, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Hồng", "nangluong":23, "dam":0.5, "beo":0, "duong":5.2, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Măng Cụt", "nangluong":13, "dam":0.1, "beo":0, "duong":3.5, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Mãng Cầu Ta - Quả na", "nangluong":56, "dam":1.4, "beo":0, "duong":12.6, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Mít", "nangluong":11, "dam":0.3, "beo":0, "duong":2.5, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Nhản", "nangluong":4, "dam":0.1, "beo":0, "duong":0.9, "vitamin":0.1},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Nho Mỹ", "nangluong":68, "dam":0.4, "beo":0, "duong":16.5, "vitamin":0.15},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Nước Chanh", "nangluong":149, "dam":0.1, "beo":0, "duong":37.2, "vitamin":0.15},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Nước Dừa tươi", "nangluong":128, "dam":5.2, "beo":1.7, "duong":22.8, "vitamin":4},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Nước Rau Má", "nangluong":174, "dam":4.4, "beo":0, "duong":39.2, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Nước Sấm (200ml)", "nangluong":74, "dam":0, "beo":0, "duong":19.9, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Nước Mía", "nangluong":106, "dam":0, "beo":0, "duong":26, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Nước Ngọt", "nangluong":146, "dam":0, "beo":0, "duong":36.2, "vitamin":0.08},
  {"buoi":"Trái Cây& Thức uống", "thucan": "ỔI", "nangluong":53, "dam":1, "beo":0, "duong":12.3, "vitamin":10.5},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Quýt", "nangluong":28, "dam":0.6, "beo":0, "duong":6.4, "vitamin":0.6},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Táo Mỹ", "nangluong":107, "dam":1.1, "beo":0, "duong":25.8, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Táo ta", "nangluong":9, "dam":0.2, "beo":0, "duong":2.1, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Thanh Long", "nangluong":225, "dam":7.3, "beo":0, "duong":49, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Sinh Tố", "nangluong":277, "dam":3.2, "beo":3.2, "duong":58.8, "vitamin":2},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Sữa tươi ( 200ml)", "nangluong":152, "dam":6.5, "beo":6, "duong":18.1, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Sữa Đậu Nành (250ml)", "nangluong":136, "dam":6, "beo":2.9, "duong":15, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Sữa chua(hủ 110ml)Yaghurt", "nangluong":137, "dam":3.8, "beo":4, "duong":21.6, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Sầu Riêng(múi)", "nangluong":28, "dam":0.5, "beo":0.3, "duong":5.7, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Vú Sữa", "nangluong":83, "dam":2, "beo":0, "duong":18.5, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Vải", "nangluong":9, "dam":0.1, "beo":0, "duong":2.1, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Ly Ensure (230ml)", "nangluong":230, "dam":8.6, "beo":7.5, "duong":31, "vitamin":0},
  {"buoi":"Trái Cây& Thức uống", "thucan": "Xoài", "nangluong":179, "dam":1.6, "beo":0.8, "duong":41.2, "vitamin":0.5}
]