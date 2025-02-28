import { IsStringMinMaxDecorator } from "@common/decorators";
import { IsArray, IsNotEmpty, IsString } from "class-validator";
import { i18nValidationMessage } from "nestjs-i18n";

export class CreatePostDto {
	/**
	 * Title of post
	 * @example "Lorem ipsum dolor sit"
	 */

	 @IsStringMinMaxDecorator()
	title: string;

	/**
	 * Description of post
	 * @example "Some paragraph of text"
	 */

	 @IsStringMinMaxDecorator()
	description: string;

	/**
	 * Content of post
	 * @example "Long paragraph of text"
	 */

	 @IsStringMinMaxDecorator()
	content: string;

	/**
	 * Tags of post
	 * @example ["fantasy", "adventure"]
	 */

	@IsNotEmpty({ message: i18nValidationMessage("validation.isNotEmpty") })
	@IsString({
		message: i18nValidationMessage("validation.isDataType", {
			type: "string",
		}),
		each: true,
	})
	@IsArray({
		message: i18nValidationMessage("validation.isDataType", {
			type: "array",
		}),
	})
	tags: string[];
}
