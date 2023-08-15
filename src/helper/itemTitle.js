export const itemTitle = (name) => {
    if (name === "place") {
        return "مکان فعالیت شرکت"
    } else if (name === "shareholder") {
        return "ترکیب سهامداران"
    } else if (name === "part2") {
        return "جمع کل ترکیب سهامداران"
    } else if (name === "residence") {
        return "آدرس محل سكونت اعضای هیئت مدیره فعلي شرکت"
    } else if (name === "manpower") {
        return "مشخصات نیروی انساني شرکت"
    } else if (name === "educational") {
        return "سوابق تحصیلی، علمی، تخصصی و اجرایی مدیرعامل و اعضاء هیئت مدیره"
    } else if (name === "product") {
        return "مشخصات محصولات/ خدمات اصلی شرکت"
    } else if (name === "bank") {
        return "بانکها / نهادهای مالی اصلی شرکت / فرد"
    } else if (name === "active_f") {
        return "فهرست تسهیلات فعال شرکت - فهرست تسهیلات تسویه شده (3 سال اخیر)"
    } else if (name === "active_w") {
        return "فهرست ضمانتنامه فعال شرکت - فهرست ضمانتنامه باطل شده (3 سال اخیر)"
    } else if (name === "benefit") {
        return "صورت حساب سود و زیان (ارقام به میلیون ریال)"
    } else if (name === "asset") {
        return "دارایی ها و بدهی ها"
    } else if (name === "approvals") {
        return "وضعیت مجوزهای تأییدیه‌ها، استانداردها، پروانه تأسیس، پروانه بهره‌برداری و ثبت اختراع و ..."
    } else if (name === "contract") {
        return "فهرست قراردادهای شاخص شرکت (3 سال گذشته)"
    } else if (name === "pledge") {
        return "وثایق قابل‌ارائه"
    } else if (name === "estate") {
        return "فهرست دارایی‌های شرکت، مدیران، سهامداران، ضامنین (دریافت فهرست دارایی‌های شرکت و مدیران تنها برای افزایش حد اعتباری شرکت می‌باشد)"
    } else if (name === "introduction") {
        return "تاریخچه و معرفی اجمالی شرکت"
    } else if (name === "board") {
        return "ترکیب اعضای هیئت مدیره"
    } else if (name === "f_license") {
        return "اجازه نامه تکمیل شده استعلام رفتار اعتباری اشخاص حقیقی به تعداد اعضای هیئت مدیره"
    } else if (name === "f_registration_doc") {
        return "مدارک ثبتی شرکت شامل اساسنامه/لیست سهامداران/روزنامه رسمی آخرین تغییرات ثبتی شرکت"
    } else if (name === "f_signatory") {
        return "تصویر مدارک هویتی اعضای هیئت مدیره  شرکت که صاحب امضا می باشند (تصویر کارت ملی و شناسنامه)"
    } else if (name === "f_knowledge") {
        return "گواهی دانش بنیان شرکت"
    } else if (name === "f_resume") {
        return "رزومه شرکت به همراه مستندات قرارداد های مشابه"
    } else if (name === "f_loans") {
        return "لیست تسهیلات و وامهای اخذ شده شرکت"
    } else if (name === "f_statement") {
        return "اظهارنامه مالیاتی سال 1398 ، 1399 و 1400 (در صورتی که فروش شرکت بیش از 8 میلیارد تومان بوده گزارش حسابرسی نیز باید ارسال شود)"
    } else if (name === "f_balance") {
        return " تراز آزمایشی منتهی به تاریخ 30/11/1400 به همراه معین کلیه حسابها"
    } else if (name === "f_catalog") {
        return "مشخصات فنی و کاتالوگ محصول / خدمات"
    } else if (name === "f_insurance") {
        return "آخرین لیست بیمه شرکت به همراه فیش بیمه پرداختی در وجه تامین اجتماعی"
    } else if (name === "f_proforma") {
        return "پیش فاکتور مواد اولیه و قطعات مورد نیاز جهت تولید محصول طرح"
    } else if (name === "f_bills") {
        return "قبوض اب و برق و قرداد اجاره محل اجرای طرح(در صورت استیجاری بودن)"
    } else {
        return name
    }

}