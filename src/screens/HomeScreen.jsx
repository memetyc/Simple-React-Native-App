import { FlatList, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../../hooks/useResult";
import ResultList from "../components/ResultList";
import { useState } from "react";

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResult();
  const [term, setTerm] = useState("");

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  if (results.length == 0) {
    return (
      <View>
        <SearchBar
          term={term}
          onChangeTerm={setTerm}
          onSubmitTerm={() => searchApi(term)}
        />
        <Text style={{ fontSize: 30, textAlign: "center" }}>
          Herhangi bir restorant bulunamadı
        </Text>
      </View>
    );
  }
  if (errorMessage !== "") {
    return (
      <View>
        <SearchBar
          term={term}
          onChangeTerm={setTerm}
          onSubmitTerm={() => searchApi(term)}
        />
        <Text style={{ fontSize: 30, textAlign: "center" }}>
        {errorMessage}
        </Text>
      </View>
    );
  }

  return (
    <View>
      <SearchBar
        term={term}
        onChangeTerm={setTerm}
        onSubmitTerm={() => searchApi(term)}
      />
      <ResultList
        title={"Ucuz Restoranlar"}
        results={filterResultsByPrice("₺")}
      />
      <ResultList
        title={"Orta Fiyatli Restoranlar"}
        results={filterResultsByPrice("₺₺")}
      />
      <ResultList
        title={"Pahali Restoranlar"}
        results={filterResultsByPrice("₺₺₺")}
      />
    </View>
  );
}
