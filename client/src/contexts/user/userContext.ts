import { createContext, useContext } from 'react';
import type { UserType } from '../../types/user';
import type { UserHandlersContextType } from '../../types/contexts/userContext';

const UserContext = createContext<UserType>({ status: 'loading' });

const UserHandlersContext = createContext<null | UserHandlersContextType>(null);

const useUserHandlers = (): UserHandlersContextType => {
  const context = useContext(UserHandlersContext);
  if (!context) throw new Error('useUserHandlers must be used within a UserHandlersProvider');
  return context;
};

export { UserContext, UserHandlersContext, useUserHandlers };
