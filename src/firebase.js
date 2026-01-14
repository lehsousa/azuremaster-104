// firebase.js - Configuração do Firebase
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuração do Firebase com credenciais reais do projeto azuremaster-study
const firebaseConfig = {
  apiKey: "AIzaSyC89xo5HuojlXAZfBv_YrNrI_hdPx7FUiQ",
  authDomain: "azuremaster-study.firebaseapp.com",
  projectId: "azuremaster-study",
  storageBucket: "azuremaster-study.firebasestorage.app",
  messagingSenderId: "117125529682",
  appId: "1:117125529682:web:1e201a2512fe0544a81f8b"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Exportar funções de autenticação para uso nos componentes
export { 
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth';
