import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RootNavigator from "./src/navigation/RootNavigator";
import RootContainer from "./src/containers/RootContainer";
import {
   QueryClient,
   QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

export default function App() {
   return (
      <>
         <RootContainer>
            <QueryClientProvider client={queryClient}>
               <RootNavigator/>
            </QueryClientProvider>
         </RootContainer>
      </>
   );
}


