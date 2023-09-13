medeelel("болд", "зураач", "90");
medeelel("сараа", "багш", "60");
medeelel("өсөхөө", "програмист", "80");
function medeelel(name, job, avgDun) {
  switch (job) {
    case "багш":
      console.log(name + " бол хүүхдүүдэд хичээл заадаг.");
      break;
    case "зураач":
      console.log(name + " бол гоё зураг зурдаг.");
      break;
    case "програмист":
      console.log(name + " вэб программ зохиогч юм");
      break;

    default:
      console.log(name + " бол өөр ямар нэг ажил хийдэг юм байна. Бүү мэд...");
      break;
  }

  switch (true) {
    case avgDun >= 90:
      console.log(name + " бол ОНЦ сурлагатан");
      break;
    case avgDun < 90 && avgDun >= 80:
      console.log(name + " бол САЙН сурлагатан");
      break;
    case avgDun < 80 && avgDun >= 70:
      console.log(name + " бол ДУНД сурлагатан");
      break;
    default:
      console.log(name + " бол МУУ сурлагатан");
      break;
  }
}
