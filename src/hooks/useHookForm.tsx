import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";

export const useHookForm = <T extends z.ZodTypeAny>(
    schema: T,
    defaultValues?: z.infer<T>,
) => {
    return useForm<z.infer<T>>({
        defaultValues,
        resolver: zodResolver(schema),
    })
}