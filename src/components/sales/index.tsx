import { CircleDollarSign } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Sales() {
    return (
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Últimos clientes
                    </CardTitle>
                    <CircleDollarSign className="ml-auto w-4 h-4" />
                </div>
                <CardDescription>
                    Novos clientes nas últimas 24 horas
                </CardDescription>
            </CardHeader>

            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/yara-almeida.png" />
                        <AvatarFallback>YA</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">
                            Yara Almeida
                        </p>
                        <span className="text-[12px] sm:text-sm text-gray-400">
                            teste@teste.com
                        </span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://images.pexels.com/photos/1687675/pexels-photo-1687675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <AvatarFallback>AC</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">
                            Ana Carolina
                        </p>
                        <span className="text-[12px] sm:text-sm text-gray-400">
                            ana@teste.com
                        </span>
                    </div>
                </article>

                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        <AvatarFallback>SR</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-base font-semibold">
                            Stephanie Reis
                        </p>
                        <span className="text-[12px] sm:text-sm text-gray-400">
                            stephanie@teste.com
                        </span>
                    </div>
                </article>
            </CardContent>
        </Card>
    );
}
