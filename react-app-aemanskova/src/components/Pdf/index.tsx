import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexGrow: 1,
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "left",
  },
});

interface PdfFormProps {
  name: string;
  age: string;
  picture: string;
  birthday: string;
  gender: string;
}

const MyDocument: React.FC<PdfFormProps> = ({
  name,
  age,
  picture,
  birthday,
  gender,
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>
          {picture && <Image style={styles.image} src={picture} />}
          <View>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>
              {gender}, {age} y.o., was born {birthday}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
