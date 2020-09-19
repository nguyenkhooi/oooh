import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { IPSCR, useDimension } from "utils";

export function S_PortfolioGrid(props: IPSCR) {
  const {
    theme: { C },
  } = props;
  const [items, setItems] = React.useState([
    {
      _id: "5f66693c1093d7d6e5644b20",
      title:
        "Id labore officia nulla incididunt culpa amet ut eu velit nulla reprehenderit nisi.",
      body:
        "Consectetur elit amet minim et est pariatur ullamco ex magna dolor deserunt quis tempor excepteur. Deserunt incididunt adipisicing commodo exercitation. Dolor dolor pariatur aute velit ex. In mollit velit nulla anim et ipsum irure enim velit non. Aute fugiat sit nisi anim voluptate ad fugiat fugiat duis ea. Dolore occaecat consectetur eiusmod irure. Exercitation eu excepteur deserunt esse laboris aute fugiat.",
      pic1: "http://placehold.it/32x32",
      grid: [
        {
          src: "http://placehold.it/32x32",
          label: "Denise Barker",
        },
        {
          src: "http://placehold.it/32x32",
          label: "Edwina Garrett",
        },
        {
          src: "http://placehold.it/32x32",
          label: "Dean Parrish",
        },
      ],
      color: "#EEA47FFF",
    },
    {
      _id: "5f66693c1a0fa734987688a4",
      title: "Proident cupidatat occaecat sint nostrud ullamco eu.",
      body:
        "Anim laborum occaecat esse laborum sint. Ipsum enim ea deserunt sunt Lorem ad exercitation pariatur. Fugiat magna velit sint exercitation id est pariatur amet ea.",
      pic1: "http://placehold.it/32x32",
      grid: [
        {
          src: "http://placehold.it/32x32",
          label: "Schroeder Beasley",
        },
        {
          src: "http://placehold.it/32x32",
          label: "Teri Greene",
        },
        {
          src: "http://placehold.it/32x32",
          label: "Fay Thornton",
        },
      ],
      color: "#101820FF",
    },
    {
      _id: "5f66693c2fa4a50fe5f2423e",
      title:
        "Ex ad ipsum laborum commodo duis nulla id dolore culpa proident sunt ex cupidatat consectetur.",
      body:
        "Enim ad ipsum esse minim eu Lorem consequat non aliquip et deserunt. Exercitation ea incididunt mollit cupidatat ipsum qui deserunt officia duis ea aute laborum. Esse officia aliquip do est deserunt non exercitation eiusmod consequat.",
      pic1: "http://placehold.it/32x32",
      grid: [
        {
          src: "http://placehold.it/32x32",
          label: "Miles Merrill",
        },
        {
          src: "http://placehold.it/32x32",
          label: "Shaw Mills",
        },
        {
          src: "http://placehold.it/32x32",
          label: "Miller Mcdaniel",
        },
      ],
      color: "#ED2B33FF",
    },
    {
      _id: "5f66693c760e26f0969394cb",
      title:
        "Occaecat deserunt irure aute Lorem excepteur id occaecat proident exercitation.",
      body:
        "Incididunt magna cillum officia sit et veniam. Incididunt aliquip ea officia labore. Commodo mollit id nisi pariatur irure laborum. Minim esse minim dolor velit qui quis fugiat dolore occaecat. Aute sit et mollit adipisicing voluptate commodo. Do nulla sit veniam ex ipsum adipisicing incididunt.",
      pic1: "http://placehold.it/32x32",
      grid: [
        {
          src: "http://placehold.it/32x32",
          label: "Madeline Roach",
        },
        {
          src: "http://placehold.it/32x32",
          label: "Carlene Moss",
        },
        {
          src: "http://placehold.it/32x32",
          label: "Katina Dorsey",
        },
      ],
      color: "#FEE715FF",
    },
    {
      _id: "5f66693c9d3552b13e31bd81",
      title:
        "Occaecat et sunt consequat ullamco ad velit duis officia elit quis qui quis mollit.",
      body:
        "Pariatur nulla officia exercitation enim minim enim cillum laboris tempor enim adipisicing minim duis aliqua. Voluptate enim sit dolore et pariatur velit et officia dolore velit aute. Laborum nisi nostrud id ea dolore excepteur consequat est. Velit dolore veniam fugiat ipsum. Amet aliqua sint incididunt veniam tempor culpa. Magna in commodo nulla aliquip non anim. Velit culpa magna qui est adipisicing non pariatur deserunt quis est deserunt.",
      pic1: "http://placehold.it/32x32",
      grid: [
        {
          src: "http://placehold.it/32x32",
          label: "Skinner Oconnor",
        },
        {
          src: "http://placehold.it/32x32",
          label: "Lidia Tate",
        },
        {
          src: "http://placehold.it/32x32",
          label: "Barr Farmer",
        },
      ],
      color: "#FEE715FF",
    },
    {
      _id: "5f66693ce8cefb6356cad054",
      title: "Consequat aliqua deserunt quis enim cillum sint voluptate.",
      body:
        "Excepteur exercitation occaecat Lorem anim magna minim officia minim ut consequat. Enim voluptate excepteur laboris in. Quis non cupidatat voluptate ullamco dolor aliquip sunt labore. Ullamco consectetur ipsum id non. Dolor aliquip qui ea ad esse consequat esse anim in qui aliquip. Aute aliquip fugiat eiusmod aute reprehenderit ipsum nulla.",
      pic1: "http://placehold.it/32x32",
      grid: [
        {
          src: "http://placehold.it/32x32",
          label: "Marks Kirk",
        },
        {
          src: "http://placehold.it/32x32",
          label: "Adams Avila",
        },
        {
          src: "http://placehold.it/32x32",
          label: "Jerry Kane",
        },
      ],
      color: "#00539CFF",
    },
    {
      _id: "5f66693cf998c3fc50b6e84b",
      title:
        "Ut aute id et fugiat labore consectetur sint sint minim Lorem ut deserunt elit laboris.",
      body:
        "Aliquip pariatur velit irure ullamco nulla quis enim proident exercitation adipisicing labore excepteur do. Sit occaecat enim ut deserunt sit dolor ullamco excepteur anim quis. Ex est est id commodo ut. Labore commodo laboris dolor adipisicing in incididunt ullamco sint deserunt amet in proident. Officia dolore eiusmod commodo commodo tempor laboris ea sunt dolore non Lorem aliquip. Laborum quis ea aute reprehenderit cillum sit nulla consectetur.",
      pic1: "http://placehold.it/32x32",
      grid: [
        {
          src: "http://placehold.it/32x32",
          label: "Eaton Campbell",
        },
        {
          src: "http://placehold.it/32x32",
          label: "Valenzuela Serrano",
        },
        {
          src: "http://placehold.it/32x32",
          label: "Alston Rodriguez",
        },
      ],
      color: "#FEE715FF",
    },
    {
      _id: "5f66693c6bc2ebdeb50474d8",
      title: "Labore do irure consectetur do.",
      body:
        "Non elit pariatur dolor ea pariatur dolore velit quis. Ad ullamco eu fugiat amet ut incididunt aute Lorem duis aute Lorem ullamco nisi reprehenderit. Esse voluptate mollit occaecat irure et est et sunt nisi mollit.",
      pic1: "http://placehold.it/32x32",
      grid: [
        {
          src: "http://placehold.it/32x32",
          label: "Vaughn Santos",
        },
        {
          src: "http://placehold.it/32x32",
          label: "Ayala Wyatt",
        },
        {
          src: "http://placehold.it/32x32",
          label: "Chaney Garrison",
        },
      ],
      color: "#D6ED17FF",
    },
    {
      _id: "5f66693cf20b555b5bfed6fd",
      title:
        "Dolor labore tempor quis est mollit minim sint labore officia laborum aute velit.",
      body:
        "Aute pariatur irure id consequat nostrud laborum amet deserunt officia mollit. Exercitation elit ex ea sit magna reprehenderit aliqua consequat incididunt. Irure duis est velit laboris in.",
      pic1: "http://placehold.it/32x32",
      grid: [
        {
          src: "http://placehold.it/32x32",
          label: "Janine Wade",
        },
        {
          src: "http://placehold.it/32x32",
          label: "Galloway Fuentes",
        },
        {
          src: "http://placehold.it/32x32",
          label: "Wilson Mendez",
        },
      ],
      color: "#D6ED17FF",
    },
    {
      _id: "5f66693ca7a88b62079a07f9",
      title:
        "Ipsum consectetur Lorem eu excepteur dolore quis Lorem incididunt id aliquip.",
      body:
        "Irure incididunt duis non reprehenderit proident ullamco est nisi. Aute aliqua dolor est pariatur id eu incididunt. Et consectetur veniam dolore nulla est eu occaecat ullamco culpa ipsum aliqua pariatur. Cillum commodo quis esse mollit id.",
      pic1: "http://placehold.it/32x32",
      grid: [
        {
          src: "http://placehold.it/32x32",
          label: "Snider Riley",
        },
        {
          src: "http://placehold.it/32x32",
          label: "Ada Bass",
        },
        {
          src: "http://placehold.it/32x32",
          label: "Ballard Flowers",
        },
      ],
      color: "#606060FF",
    },
  ]);

  return (
    <FlatGrid
      itemDimension={useDimension("window")[0] * 0.3}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { backgroundColor: item.color }]}>
          <Text style={styles.itemName}>{item.title}</Text>
          <Text style={styles.itemCode}>{item.color}</Text>
        </View>
      )}
    />
  );

  // return (
  //   <SectionGrid
  //     itemDimension={90}
  //     // staticDimension={300}
  //     // fixed
  //     // spacing={20}
  //     sections={[
  //       {
  //         title: 'Title1',
  //         data: items.slice(0, 6),
  //       },
  //       {
  //         title: 'Title2',
  //         data: items.slice(6, 12),
  //       },
  //       {
  //         title: 'Title3',
  //         data: items.slice(12, 20),
  //       },
  //     ]}
  //     style={styles.gridView}
  //     renderItem={({ item, section, index }) => (
  //       <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
  //         <Text style={styles.itemName}>{item.name}</Text>
  //         <Text style={styles.itemCode}>{item.code}</Text>
  //       </View>
  //     )}
  //     renderSectionHeader={({ section }) => (
  //       <Text style={styles.sectionHeader}>{section.title}</Text>
  //     )}
  //   />
  // )
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    // flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#fff",
  },
});
