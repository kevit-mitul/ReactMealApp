import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RootNavigator from "./src/navigation/RootNavigator";
import RootContainer from "./src/containers/RootContainer";
import {
   QueryClient,
   QueryClientProvider,
} from '@tanstack/react-query'
import {store} from "./src/store/store";
import {Provider} from "react-redux";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
   return (
      <>
         <RootContainer>
            <Provider store={store}>
               <QueryClientProvider client={queryClient}>
                  <RootNavigator/>
               </QueryClientProvider>
            </Provider>
         </RootContainer>
      </>
   );
}


