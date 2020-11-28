import { Image as RNImage, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { Kitten } from "./UiKitten";

const Layout = Animatable.createAnimatableComponent(Kitten.Layout);
const Image = Animatable.createAnimatableComponent(RNImage);
const Touchie = Animatable.createAnimatableComponent(TouchableOpacity);

/**
 * An animatable superset of animatable components
 *
 * ---
 * @example
 * <Ni.Layout animation="fadeInUp" delay={1000}><Text>Ni!</Text></Ni.Layout>
 *
 * @version 0.10.23
 * @author nguyenkhooi
 */
export const Ni = {
  /** A ni TouchableOpacity */
  Touchie,
  /** A ni View */
  Layout,
  /** A ni Image */
  Image,
};
export const Ani = Animatable;
