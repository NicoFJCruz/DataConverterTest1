export function Convertidor(inputValue: number, selectedOption: string) {
  const conversionMap = {
    Yavin: { Yavin: 0, Lothal: 3277, Convenio: -36, Hosnian: 7977, Sith: -35, Naboo: 867, Imperio: -19, Doman: 20000, Ruusan: 1032, Kaas: 4980 },
    Convenio: { Yavin: 36, Lothal: 3313, Convenio: 0, Hosnian: 8013, Sith: 1, Naboo: 903, Imperio: 54, Doman: 20036, Ruusan: 1068, Kaas: 5016},
    Sith: { Yavin: 35, Lothal: 3312, Convenio: -1, Hosnian: 8012, Sith: 0, Naboo: 902, Imperio: 53, Doman: 20035, Ruusan: 1067, Kaas: 5015 },
    Naboo: { Yavin: -867, Sith: -902, Convenio: -903, Lothal: 2446, Hosnian: 7110, Imperio: -885, Doman: 19133, Ruusan: 165, Kaas: 4113},
    Lothal: { Yavin: -3277, Lothal: 0, Convenio: -3313, Hosnian: 4700,  Sith: -3312, Naboo: -2446, Imperio: -3295, Doman: 16723, Ruusan: -2245, Kaas: 1703 },
    Hosnian: { Yavin: -7977, Lothal: -4700, Convenio: -8013, Hosnian: 0, Sith: -8012, Naboo: -7110, Imperio: -7995, Doman: 12023, Ruusan: -6945, Kaas: -2997 },
    Imperio: { Yavin: 19, Convenio: -54, Sith: -53, Naboo: 885, Lothal: 3295, Hosnian: 7995, Imperio: 0, Doman: 20019, Ruusan: 1051, Kaas: 4999 },
    Doman: { Yavin: -20000, Convenio: -20036, Sith: -20035, Naboo: -19133, Lothal: -16723, Hosnian: -12023, Imperio: -20019, Doman: 0, Ruusan: -18968, Kaas: -15020 },
    Ruusan: { Yavin: -1032, Convenio: -1068, Sith: -1067, Naboo: -165, Lothal: 2245, Hosnian: 6945, Imperio: -1051, Doman: 18968, Ruusan: 0, Kaas: 3948 },
    Kaas: { Yavin: -4980, Convenio: -5016, Sith: -5015, Naboo: -4113, Lothal: -1703, Hosnian: 2997, Imperio: -4999, Doman: 15020, Ruusan: -3948, Kaas: 0 }
  };
      
  const datacionMap = {
    Yavin: { Neg: " ABY", Pos: " DBY" },
    Convenio: { Neg: " ACG", Pos: " DCG" },
    Sith: { Neg: " AIS", Pos: " DIS" },
    Imperio: { Neg: " AFI", Pos: " DFI" },
    Lothal: " AL",
    Hosnian: " C.R.C.",
    Naboo: " AK",
    Doman: { Neg: " AAD", Pos: " DAD" },
    Ruusan: { Neg: " ARR", Pos: " DRR" },
    Kaas: { Neg: " ARK", Pos: " DRK" }
  };

  const differences = conversionMap[selectedOption as keyof typeof conversionMap];

  if (!differences) {
    return {};
  }

  function formatearNumero(numero: number): string {
    return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const objConvertYears: Record<string, string> = {};
  for (const key in differences) {
    let result: string;
    const number = inputValue + differences[key as keyof typeof differences];
    const datacion = datacionMap[key as keyof typeof datacionMap];

    if (typeof datacion === 'string') {
      result = formatearNumero(Math.abs(number)) + datacion;
    } else if (number < 0) {
      result = formatearNumero(Math.abs(number)) + datacion.Neg;
    } else {
      result = formatearNumero(Math.abs(number)) + datacion.Pos;
    }

    objConvertYears[key] = result;
  }

  return objConvertYears;
}