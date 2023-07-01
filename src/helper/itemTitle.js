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
    } else {
        return name
    }

}