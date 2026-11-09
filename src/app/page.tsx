import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const sections = [
  { title: "Section one", description: "Placeholder content goes here." },
  { title: "Section two", description: "Placeholder content goes here." },
  { title: "Section three", description: "Placeholder content goes here." },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="border-b">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center px-6">
          <span className="font-semibold tracking-tight">
            Esie Property Solutions
          </span>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-16 px-6 py-24">
        <section className="flex max-w-2xl flex-col items-start gap-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Esie Property Solutions
          </h1>
          <p className="text-lg text-muted-foreground">
            Our new website is on its way.
          </p>
          <Button size="lg">Get started</Button>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          {sections.map((section) => (
            <Card key={section.title}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto w-full max-w-5xl px-6 py-6 text-sm text-muted-foreground">
          Esie Property Solutions
        </div>
      </footer>
    </div>
  );
}
