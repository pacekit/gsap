"use client";

import { useMutation } from "@tanstack/react-query";
import { SubmitEvent, useState } from "react";

import { MailIcon, NewspaperIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidEmail = (email: string) => emailRegex.test(email);

export const Newsletter = () => {
    const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);
    const [email, setEmail] = useState("");

    const subscribeMutation = useMutation({
        mutationFn: async (email: string) => {
            const res = await fetch(`${import.meta.env.VITE_PACEKIT_API_HOST}/api/subscribe`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
            return res.json();
        },
        onSuccess: () => {
            setResult({
                success: true,
                message: "Subscribed successfully!",
            });
            setEmail("");
        },
        onError: (error) => {
            console.error("Error subscribing to newsletter:", error);
        },
    });

    const onSubmit = async (e: SubmitEvent): Promise<void> => {
        e.preventDefault();
        if (email.length == 0 || !isValidEmail(email)) {
            setResult({
                success: false,
                message: "Please enter a valid email",
            });
            return;
        }
        subscribeMutation.mutate(email);
    };

    return (
        <form
            onSubmit={onSubmit}
            className="bg-foreground/2 relative flex flex-col items-center overflow-hidden rounded-md border px-3 py-4 text-center sm:px-8 sm:py-6 xl:px-16">
            <NewspaperIcon className="text-foreground/5 absolute top-4 left-4 -z-1 size-12 -rotate-45" />
            <p className="text-lg/none font-medium">Join our newsletter!</p>
            <div className="mt-3 flex items-start gap-2 sm:mt-4 sm:gap-3">
                <div className="text-start">
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="email"
                        className="bg-background block w-52 shadow-none sm:w-72"
                        placeholder="mail@site.com"
                        aria-invalid={result?.success === false}
                        aria-label="Email"
                    />
                    {result && result?.success === false && (
                        <span className="text-destructive text-xs sm:text-sm">{result.message}</span>
                    )}
                    {result && result.success && (
                        <span className="text-xs text-green-500 sm:text-sm">{result.message}</span>
                    )}
                </div>
                <Button
                    type="submit"
                    className="cursor-pointer sm:hidden"
                    size="icon"
                    aria-label="Subscribe"
                    disabled={subscribeMutation.isPending}>
                    {subscribeMutation.isPending ? <Spinner className="size-4" /> : <MailIcon />}
                </Button>
                <Button
                    type="submit"
                    className="cursor-pointer max-sm:hidden"
                    aria-label="Subscribe"
                    disabled={subscribeMutation.isPending}>
                    {subscribeMutation.isPending && <Spinner className="size-4" />}
                    Subscribe
                </Button>
            </div>
            <p className="text-muted-foreground mt-2 text-xs">We only send important updates. never spam!</p>
        </form>
    );
};
