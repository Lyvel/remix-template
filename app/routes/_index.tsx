import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Lyvel Web Services" },
        { name: "description", content: "Empowering Your Online Presence" },
    ];
};

export default function Index() {
    return (
        <main className="h-screen w-screen flex justify-center items-center text-8xl font-bold">
            Lyvel&apos;s Remix Template with Vite and Flat Routes
        </main>
    );
}
