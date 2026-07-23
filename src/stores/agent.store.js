import { defineStore } from "pinia";
import { fetchWrapperAgent } from "@/helpers";

const baseUrl = `${import.meta.env.VITE_API_URL}/chat`;

export const useAgentStore = defineStore({
    id: "agent",

    state: () => ({
        answer: "",
        tools: [],
        steps: [],
        loading: false,
        error: ""
    }),

    actions: {

        async chat(message) {

            this.loading = true;

            this.answer = "";
            this.tools = [];
            this.steps = [];
            this.error = "";

            try {

                const data = await fetchWrapperAgent.post(
                    baseUrl,
                    { message }
                );

                console.log("Agent response:", data);

                this.answer = data.response ?? "";
                this.tools = data.tools_used ?? [];
                this.steps = data.steps ?? [];

            } catch (e) {

                console.error(e);

                this.error =
                    e.message ||
                    String(e);

            } finally {

                this.loading = false;

            }

        },

        clear() {

            this.answer = "";
            this.tools = [];
            this.steps = [];
            this.error = "";

        }

    }

});
