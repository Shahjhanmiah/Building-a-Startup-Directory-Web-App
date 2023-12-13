import { createContext, useState } from "react";

export const MainContext = createContext(null);

const StartupContext =  ({children}) => {

    const [startups, setStartups] = useState([])


return <MainContext.Provider value={{startups, setStartups }}>
{children}
</MainContext.Provider>
}

export default StartupContext


