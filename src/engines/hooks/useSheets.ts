import * as R from "ramda";
import * as React from "react";
import Tabletop from "tabletop";

/**
 *
 * @see https://medium.com/@ryan.mcnierney/using-react-google-sheets-as-your-cms-294c02561d59
 */
export function useSheets(key: string) {
  const [_fields, setFields] = React.useState(null);
  const [_data, setData] = React.useState(null);
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
