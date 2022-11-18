import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export function Counter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  
    return (
      <View>
        <Button title="Increment" onPress={() => dispatch(increment())}></Button>
        <Text>{count}</Text>
        <Button title="Decrement" onPress={() => dispatch(decrement())}></Button>
      </View>
    );
  }