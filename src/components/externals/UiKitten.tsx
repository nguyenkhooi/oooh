import * as UIKT from "@ui-kitten/components";
import { CalendarViewModes, IndexPath } from "@ui-kitten/components";
import { createAnimatableComponent } from "react-native-animatable";

export interface dAccessory {
  style: {
    height: number;
    marginHorizontal: number;
    tintColor: string;
    width: number;
  };
}

// const Popup = createAnimatableComponent(UIKT.Modal);

/**
 *
 * @description Customized UI Kitten components befonre export it as <Kitten.[]>
 */
export const Kitten = UIKT;

//  const KittenOG = {
//   ...UIKT,
//   CalendarViewModes: CalendarViewModes,
//   ModalServiceType: CalendarViewModes,
//   IndexPath: IndexPath,
//   /**
//  * ~ Kitten.Modal, w Animatable
//  *
//  * ---
//  * @example
//  * const [visible, setVisible] = React.useState(false);

//   return (
//     <>
//       <Text onPress={() => setVisible(true)}>
//         TOGGLE Popup
//       </Text>
//       <Kitten.Popup
//         visible={visible}
//         backdropStyle={styles.backdrop}
//         onBackdropPress={() => setVisible(false)}>
//         <>
//           <Text onPress={() => setVisible(false)}>Sup!</Text>
//         </>
//       </Kitten.Popup>
//     </>
//  *
//  */
//   // Popup,
// };

// export default Kitten;
