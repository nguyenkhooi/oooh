import * as R from "ramda";
import * as React from "react";
import Tabletop from "tabletop";

/**
 *
 * @see https://medium.com/@ryan.mcnierney/using-react-google-sheets-as-your-cms-294c02561d59
 */
export function useSheets(key: string) {
  const [_fields, setFields] = React.useState(null);
  const [_data, setData] = React.useState<rSheets[]>([]);
  React.useEffect(function fetchData() {
    Tabletop.init({
      // key: '1Bh5AV7LwiiWOlK6G-kVDX8YiWJNEyLrrYU6WEYnb_lg',
      key: key,
      callback: (googleData: React.SetStateAction<null>) => {
        setData(googleData);
        setFields(R.keys(googleData[0]));
      },
      simpleSheet: true,
    });
  }, []);

  return { data: _data, fields: _fields };
}

export type rSheets = {
  _id: string;
  title: string;
  thumbnail: string;
  color: string;
  label: string;
  headline: string;
  body: string;
  body00?: string;
  body01?: string;
  body02?: string;
  body03?: string;
  body04?: string;
  body05?: string;
  body06?: string;
  body07?: string;
  body08?: string;
  body09?: string;
  body10?: string;
  image00?: string;
  image01?: string;
  image02?: string;
  image03?: string;
  image04?: string;
  image05?: string;
  image06?: string;
  image07?: string;
  image08?: string;
  image09?: string;
  image10?: string;
};
