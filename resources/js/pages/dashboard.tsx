import MangaGrid from '@/components/MangaGrid';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';
import { Book, Check, Clock, Search, Sparkles, Star, X } from 'lucide-react';
import { useState } from 'react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    const [search, setSearch] = useState<string>('');

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (search.trim()) {
            router.visit(`/search/${encodeURIComponent(search)}`);
        }
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            {/* Search bar */}
            <div className="flex justify-end">
                <form onSubmit={handleSearchSubmit} className="relative mb-4 w-64">
                    <Search className="text-muted-foreground absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 transform" />
                    <input
                        type="text"
                        placeholder="Search manga..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring h-9 w-full rounded-md border pl-8 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    />
                </form>
            </div>

            {/* Main content */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid gap-6 md:grid-cols-4">
                    {/* Sidebar */}
                    <div className="md:col-span-1">
                        <div className="space-y-6">
                            {/* My Library */}
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle>My Library</CardTitle>
                                    <CardDescription>Manage your manga collection</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <Button variant="ghost" className="w-full justify-start">
                                            <Book className="mr-2 h-4 w-4" />
                                            All Manga
                                            <Badge className="bg-muted text-muted-foreground ml-auto">102</Badge>
                                        </Button>
                                        <Button variant="ghost" className="w-full justify-start">
                                            <Clock className="mr-2 h-4 w-4" />
                                            Reading
                                            <Badge className="bg-manga-primary ml-auto text-white">36</Badge>
                                        </Button>
                                        <Button variant="ghost" className="w-full justify-start">
                                            <Check className="mr-2 h-4 w-4" />
                                            Completed
                                            <Badge className="ml-auto bg-green-500 text-white">48</Badge>
                                        </Button>
                                        <Button variant="ghost" className="w-full justify-start">
                                            <Clock className="mr-2 h-4 w-4" />
                                            Plan to Read
                                            <Badge className="ml-auto bg-blue-500 text-white">15</Badge>
                                        </Button>
                                        <Button variant="ghost" className="w-full justify-start">
                                            <X className="mr-2 h-4 w-4" />
                                            Dropped
                                            <Badge className="ml-auto bg-red-500 text-white">3</Badge>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* My Collections */}
                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle>My Collections</CardTitle>
                                    <CardDescription>Curated manga lists</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <Button variant="ghost" className="w-full justify-start">
                                            <Star className="mr-2 h-4 w-4" />
                                            Favorites
                                        </Button>
                                        <Button variant="ghost" className="w-full justify-start">
                                            <Sparkles className="mr-2 h-4 w-4" />
                                            Must Read
                                        </Button>
                                        <Button variant="ghost" className="w-full justify-start">
                                            <Sparkles className="mr-2 h-4 w-4" />
                                            2025 Picks
                                        </Button>
                                        {/* TODO: Later map user-created collections here */}
                                    </div>
                                    <Button variant="outline" className="mt-4 w-full">
                                        Create Collection
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Main Tabs */}
                    <div className="md:col-span-3">
                        <Tabs defaultValue="my-manga" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="my-manga">My Manga</TabsTrigger>
                                <TabsTrigger value="discover">Discover</TabsTrigger>
                                <TabsTrigger value="recommendations">For You</TabsTrigger>
                            </TabsList>

                            {/* My Manga */}
                            <TabsContent value="my-manga" className="mt-6">
                                <MangaGrid title="Currently Reading" />
                            </TabsContent>

                            {/* Discover */}
                            <TabsContent value="discover" className="mt-6">
                                <div className="mb-6 flex items-center justify-between">
                                    <h2 className="text-2xl font-bold">Popular Manga</h2>
                                    {/* You can connect this search to its own logic or remove if redundant */}
                                    <div className="relative w-64">
                                        <Search className="text-muted-foreground absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 transform" />
                                        <input
                                            type="text"
                                            placeholder="Search manga..."
                                            className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring h-9 w-full rounded-md border pl-8 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                                        />
                                    </div>
                                </div>
                                <MangaGrid />
                            </TabsContent>

                            {/* For You / AI Recommendations */}
                            <TabsContent value="recommendations" className="mt-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>AI-Powered Recommendations</CardTitle>
                                        <CardDescription>Personalized manga suggestions based on your reading history</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground mb-4">
                                            Complete your profile and add more manga to your library to get personalized recommendations.
                                        </p>
                                        <MangaGrid />
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
