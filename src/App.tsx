import IssueProvider from './context/IssueContext'
import { GlobalStyle } from './layout/GlobalStyle'
import Router from './router/Router'

function App() {
  return (
    <IssueProvider>
      <Router />
      <GlobalStyle />
    </IssueProvider>
  )
}

export default App
