import { defineStore } from 'pinia';

import { fetchWrapper, router } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}`;

// 23-07-2026 - Clear the old response from Answer
import { useAgentStore } from "@/stores/agent.store";

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {

        async login( username, password) {
            
            // 28-12-2025 - The response will return access token + type + username
            const user = await fetchWrapper.post(`${baseUrl}/login-spa`, { username, password });

            // update pinia state
            this.user = user;

            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            // redirect to previous url or default to home page
            router.push(this.returnUrl || '/');
        },
        
        logout() {

            // 23-07-2026 - Clear the old response from Answer
            const agentStore = useAgentStore();
            agentStore.clear();

            this.user = null;
            localStorage.removeItem('user');
            router.push('/login');
        }
    }
});
