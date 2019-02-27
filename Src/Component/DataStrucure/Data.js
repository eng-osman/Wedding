const Age = () => {
  let age = [];
  let i = 18;
  for (i; i <= 80; i++) {
    age.push(i)
  }
  return age
};
const Height = () => {
  let Height = [];
  let i = 50;
  for (i; i <= 200; i++) {
    Height.push(i)
  }
  return Height
};
const Weight = () => {
  let Weight = [];
  let i = 50;
  for (i; i <= 200; i++) {
    Weight.push(i)
  }
  return Weight
};
const Nationalty = () => ['مصري', 'سعودي', 'عراقي', 'سوري', 'لبناني', 'فلسطيني', 'سوداني', 'قطري', 'كويتي']
const Country = () => ['مصر', 'السعودية', 'العراق', 'سوريا', 'لبنان', 'فلسطين', 'السودان', 'قطر', 'الكويت']
const City = () => ['اسكندرية', 'القاهرة', 'الرياض', 'جده', 'حماة', 'حلب', 'بغداد', 'الموصل', 'غزة']
const ColoSkin = () => ['اسمر', 'ابيض', 'قمحي']
const Ralagian = () => ['مسلم', 'مسيحي', 'يهودي'];
const Status = () => ['عازب', 'مطلق', 'ارمل'];
const ReadyMerage = () => ['مستعد جدا', 'مستعد', 'متردد'];
const PartnerSalary = () => ['مهم جدا', 'مهم', 'لا يهمني '];
const IwantToKnow = () => ['مطلقين', 'عزاب', 'ارامل']
const EducationLevel = ()=>  ['تعليم اساسي', 'ثانوي', 'ماجستير', 'دكتوراه']
const BardTypee = () => ['لحية محلوقة', 'سكسوكة', 'شارب', 'لحية كاملة']
const Gender = ()=> ["ذكر", "انثي"];

const PickerConfig = {
  pickerCancelBtnColor: [255, 128, 179, 1],
  pickerConfirmBtnColor: [255, 128, 179, 1],
  pickerConfirmBtnText: 'أختيار',
  pickerCancelBtnText: 'الغاء',
  pickerTitleText: 'من فضلك اختار',
  pickerTitleColor: [255, 128, 179, 1],
}
export {
  Age, Height, Weight, Nationalty, City, Country, ColoSkin, Ralagian, Status, ReadyMerage,
  PartnerSalary, IwantToKnow,
  EducationLevel,
  BardTypee,
  PickerConfig,
  Gender
}